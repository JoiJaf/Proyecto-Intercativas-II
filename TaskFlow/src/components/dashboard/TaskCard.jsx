import React from 'react';
import "../../index.css";

export function TaskCard({bgColor, number, title, course, dueDate}) {
    return (
        <div className={`${bgColor} p-[3vw] rounded-[3rem] grid`}>
            <p className="font-bold fs_md mb-[2rem]">{number}</p>
            <p className="fs_lg font-normal w-[8vw] mr-[3vw] mb-2">{title}</p>
            <p className="font-semibold mb-[5vw]">{course}</p>
            <p className="text-[#2c2c2c] font-semibold fs_md">{dueDate}</p>
        </div>
    );
}