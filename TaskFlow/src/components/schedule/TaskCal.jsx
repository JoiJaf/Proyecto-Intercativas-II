
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../../index.css";

export function TaskCal() {
    

    return (
        <div className="m-10 mt-[12rem]">
            <Calendar 
            onClickDay={(value) => alert("Día " + value + "se le dio click")}
            
            />

        </div>
    )


}