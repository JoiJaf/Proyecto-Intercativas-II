import "../../index.css";

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export function TaskCal() {

    return (
        <div className="m-10 mt-[12rem]">
            <Calendar />
        </div>
    )


}