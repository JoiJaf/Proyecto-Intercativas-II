
import React, { useState, useEffect } from 'react';
import "../../index.css";

//circular progress bar
import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export function Stadistics() {

    // Fecha y hora en tiempo real -------------------------
    const [week, setCurrentDay] = useState('');
    const [month, setCurrentMonth] = useState('');
    const [date, setCurrentDate] = useState('');
    const [year, setCurrentYear] = useState('');
    const [time, setCurrentTime] = useState('');

    useEffect(() => {
        function day() {
            const fecha = new Date();
            const hoy = fecha.getDay();
            const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
            return days[hoy];
        }

        setCurrentDay(day());
    }, []);

    useEffect(() => {
        function month() {
            const fecha = new Date();
            const mes = fecha.getMonth();
            const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
            return meses[mes];
        }

        setCurrentMonth(month());
    }, []);

    useEffect(() => {
        function date() {
            const fecha = new Date();
            const date = fecha.getDate();

            return date;
        }

        setCurrentDate(date());
    }, []);

    useEffect(() => {
        function year() {
            const fecha = new Date();
            const year = fecha.getFullYear();

            return year;
        }

        setCurrentYear(year());
    }, []);

    useEffect(() => {
        const intervalTime = setInterval(() => {
            const fecha = new Date();
            const hours = ((fecha.getHours() < 10) ? "0" : "") + fecha.getHours();
            const minutes = ((fecha.getMinutes() < 10) ? "0" : "") + fecha.getMinutes();
            setCurrentTime(`${hours}:${minutes}`);
            document.getElementById('time').innerHTML = hours + ":" + minutes;
        }, 1000);
        return () => clearInterval(intervalTime);
    }, []);
    
    // Fecha y hora en tiempo real -----------------------

    const value = 0;
    
    <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} styles={{}} />;

    return (
        <section className="mx-[3.5rem] flex p-[2.5rem]">

            <div className="mx-[2vw] grid border-solid border-2 border-[#E0E0E0] w-[25vw] h-[15vw] p-[2rem] rounded-[3rem]">
                <p className="fs_md font-semibold">Today is</p>
                <p className="fs_xl font-semibold ">{week}</p>
                <p className="fs_md font-semibold">{month} {date}, {year}</p>
                <p className="pt-[2vw] pb-[1rem] fs_xl font-semibold text-right" id='time'></p>
            </div>

            <div className='flex gap-[1vw]'>

                <div>
                    <h2 class="fs_xl m-[0] block">Estadistics</h2>
                    <div className="grid border-solid border-2 border-[#E0E0E0] w-[15vw] p-[2rem] rounded-[3rem]">
                        <p className="fs_xxl font-semibold mb-[1rem]">1</p>
                        <p className="fs_lg font-light pb-[1rem] pr-[4rem] text-[#979797]">Uncompleted tasks</p>
                    </div>
                </div>


                <div className="grid border-solid border-2 border-[#E0E0E0] w-[25vw] p-[2vw] rounded-[3rem]">
                    <div className='flex'>
                        <p className='text-[#979797] fs_lg font-light w-[15vw] pt-[1vw]'>So far, you've completed tasks this week</p>
                        <p className='fs_xxl font-semibold pt-[1vw] pr-1'>2/10</p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-circle" width="50" height="50" viewBox="0 0 24 24" stroke-width="1" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                            <path d="M12 9h.01" />
                            <path d="M11 12h1v4h1" />
                        </svg>
                    </div>
                    <div>
                        <div class="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2.5">
                            <div class="h-4 w-4 bg-red-500 rounded-full animate-full"></div>

                        </div>
                    </div>

                </div>

                <div className='w-[15vw] stroke-[#6BDD8F]'>
                    <CircularProgressbarWithChildren value={100}>

                        <div style={{ fontSize: 12, marginTop: -5 }}>
                            <strong className='fs_xxl font-bold'>100%</strong>
                        </div>
                    </CircularProgressbarWithChildren>;
                </div>
            </div>



        </section>
    )
}