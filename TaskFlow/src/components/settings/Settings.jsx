import React from 'react';
import "../../index.css";
import RoundToggleButton from './ToggleButton';

export function Settings() {
    return (

        <section className='grid justify-center items-center'>
            <section className='mx-4 mb-0'>
                <h2 className="my-[38px] ml-[30px] clamp-xxl font-bold">Settings</h2> 
                    <div className="grid text-white gap-[38px]">
                        <div className="bg-[#212121] w-full h-[176px] max-md:h-[250px] rounded-[40px]">
                            <div className="grid grid-cols-2 p-8 max-md:flex">
                                <div className='space-y-4'>
                                    <h3 className="clamp-xl text-[#6BDD8F] font-medium">Notification</h3>
                                    <p className="clamp-md max-md:text-[16px]">With this option you can activate and deactivate pop-up notifications</p>
                                </div>
                                <div className="flex justify-end p-8 max-md:justify-center max-md:items-end"><RoundToggleButton /></div>
                            </div>
                        </div>

                        <div className="bg-[#212121] w-full h-[272px] max-md:h-[600px] rounded-[40px]">
                            <div className="grid grid-cols-2 p-8 max-md:grid-cols-1">
                                <div className='space-y-4'>
                                    <h3 className="clamp-xl text-[#6BDD8F] font-medium">Change the password</h3>
                                    <h4 className="clamp-md mb-2">Password Guidelines:</h4>
                                    <ul className="list-disc pl-4">
                                        <li>Use a mix of uppercase, lowercase, numbers, and special characters.</li>
                                        <li>Ensure your password is at least 8 characters long.</li>
                                    </ul>
                                </div>

                                <form method="post" action="#">
                                    <div className="grid grid-cols-2 p-8 max-md:grid-cols-1">
                                        <div className="flex my-14">
                                            <label htmlFor="password" className="mb-1 clamp-md"></label>
                                            <input id="password" type="password" name="password" className="form-input w-full h-[56px] rounded-[20px] text-black clamp-lg p-4" />
                                        </div>

                                        <div className="flex justify-end max-md:justify-center items-center p-4">
                                        <input type="submit" value="Accept" className="bg-[#6BDD8F] clamp-lg text-white py-4 px-4 rounded-[20px] w-[190px]" />
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>  
            </section>
         
            <section>
                <div className='w-full bg-[#FCF8EC]'>
                    <h2 className="my-[38px] ml-[30px] clamp-xxl font-bold pt-[38px]">Contact with the teacher</h2>
                        <div className='grid grid-cols-2 gap-[38px] max-md:grid-cols-1'>
                            <div className='mx-[38px]'>
                                <img className='w-full h-auto' src="../src/assets/img/contactTeacher.png" alt="contact with the teacher" />
                            </div>
                
                            <div className='mx-[38px]'>
                                <form method="post" action="#">
                                    <div className="flex mb-5">
                                        <label htmlFor="email" className="mb-1 clamp-md"></label>
                                        <input id="email" type="text" name="email" className="form-input w-full h-[79px] rounded-[20px] text-black clamp-lg p-4 border-[#EEEEEE] border-2"/>
                                    </div>

                                    <div className="flex my-5">
                                        <label htmlFor="matter" className="mb-1 clamp-md"></label>
                                        <input id="matter" type="matter" name="matter" className="form-input w-full h-[79px] rounded-[20px] text-black clamp-lg p-4 border-[#EEEEEE] border-2"/>
                                    </div>

                                    <div className="flex mb-14 items-start">
                                        <label htmlFor="message" className="mb-1 clamp-md"></label>
                                        <textarea id="message" type="text" name="message" className="form-input w-full h-[256px] rounded-[40px] text-black clamp-lg p-4 border-[#EEEEEE] border-2 items-left"/>
                                    </div>

                                    <div className="flex justify-end max-md:justify-center items-center p-4 mb-[114px]">
                                        <input type="submit" value="Send" className="bg-[#323233] clamp-lg text-white py-4 px-4 rounded-[20px] w-[190px]" />
                                    </div>
                                </form>
                            </div>
                        </div>                                                     
                </div>
            </section>
        </section>

    )
}