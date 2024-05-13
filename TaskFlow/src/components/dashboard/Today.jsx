import React, { useState, useEffect } from 'react';
import "../../index.css";

export function Today() {

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

    return (
        <div className='grid my-10'>
            <div className="ml-[4vw] grid border-solid border-2 border-[#E0E0E0] w-[30vw] h-[15vw] p-[3vw] rounded-[3rem] bg-white">
                <p className="fs_md font-semibold">Today is</p>
                <p className="fs_xl font-semibold ">{week}</p>
                <p className="fs_md font-semibold pb-[1vw]">{month} {date}, {year}</p>
                <p className="mb-[2rem] fs_xl font-semibold text-right" id='time'></p>
            </div>

            <div className="ml-[4vw] mt-[2rem] border-2 rounded-[3rem] p-[2rem] w-[30vw] bg-white flex justify-center items-center">
                <p className="fs_xl font-bold">I semester <br/> <span className='fs_xxl'>6th week</span></p>
            </div>
        </div>
    )
}