import React from 'react';
import "../../index.css";

export function TaskCard({bgColor, number, title, course, dueDate}) {
    return (
        <div className={`${bgColor} p-[4vw] rounded-[3rem] grid hover:scale-[0.97] hover:duration-700 md:w-auto`}>
            <p className="font-bold md:text-[1rem] text-[2.4vw] mb-[2rem]">{number}</p>
            <p className="md:text-[1.5rem] text-[2.5vw] font-normal w-[8vw] md:mr-[2rem] mr-[10vw] mb-2">{title}</p>
            <p className="font-semibold mb-[5vw]">{course}</p>
            <p className="text-[#2c2c2c] font-semibold md:text-[1rem] text-[2vw]">{dueDate}</p>
        </div>
    );
}