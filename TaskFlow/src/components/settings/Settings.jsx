import React from 'react';
import "../../index.css";
import { Notification } from './Notification';
import { PasswordChange } from './PasswordChange';
import { ContactTeacherForm } from './ContactTeacherForm';

export function Settings() {
    return (

        <section className='grid justify-center items-center'>
            <section className='mx-4 mb-0'>
                <h2 className="my-[38px] ml-[30px] clamp-xxl font-bold">Settings</h2> 
                    <div className="grid text-white gap-[38px]">
                        <Notification />
                        <PasswordChange />
                    </div>  
            </section>
         
            <section>
                <ContactTeacherForm />
            </section>
        </section>

    )
}
