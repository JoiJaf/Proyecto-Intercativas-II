import React from 'react';
import "../../index.css";
import RoundToggleButton from './ToggleButton';

export function Notification() {
    return (
        <div className="bg-[#212121] w-full h-[176px] max-md:h-[250px] rounded-[40px]">
            <div className="grid grid-cols-2 p-8 max-md:flex">
                <div className='space-y-4'>
                    <h3 className="clamp-xl text-[#6BDD8F] font-medium">Notification</h3>
                    <p className="clamp-md max-md:text-[16px]">With this option you can activate and deactivate pop-up notifications</p>
                </div>
                <div className="flex justify-end p-8 max-md:justify-center max-md:items-end"><RoundToggleButton /></div>
            </div>
        </div>
    );
}