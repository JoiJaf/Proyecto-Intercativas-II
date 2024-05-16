import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../../index.css";

export function Cale() {
    

    return (
        <div className="my-[1rem] mx-[4rem] ">
            <Calendar 
            onClickDay={(value) => alert("Día " + value + "se le dio click")}
            
            />

        </div>
    )


}