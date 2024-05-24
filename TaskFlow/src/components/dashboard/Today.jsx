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
        <div className='grid md:my-10 md:mx-0 mx-[4vw]'>
            <div className="md:ml-[4vw] grid border-solid border-2 border-[#E0E0E0] lg:w-[30vw] md:h-[15vw] h-[10rem] md:p-[3vw] px-[8vw] pb-[2rem] pt-[1rem] rounded-[3rem] bg-white">
                <p className="md:text-[1rem] text-[.8rem] font-semibold">Today is</p>
                <p className="md:text-[1.5rem] text-[1.2rem] font-semibold ">{week}</p>
                <p className="md:text-[1rem] text-[.8rem] font-semibold pb-[1vw]">{month} {date}, {year}</p>
                <p className=" md:text-[1.5rem] text-[1.5rem] font-semibold text-right" id='time'></p>
            </div>

            <div className="md:ml-[4vw] mt-[2vw] border-2 rounded-[3rem] p-[2rem] lg:w-[30vw] bg-white flex justify-center items-center">
                <p className="text-[1.5rem] font-bold">I semester <br /> <span className='text-[1.6rem]'>6th week</span></p>
            </div>
        </div>
    )
}