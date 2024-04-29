import React from 'react';
import "../../index.css";
import RoundToggleButton from './ToggleButton';

export function Settings() {
    return (

        <section className="p-6">
            <h2 className="mt-[38px] ml-[30px] clamp-xxl">Settings</h2>
            <div className="grid my-[38px] text-white gap-[38px]">
                <div className="bg_banner w-full h-[176px] max-lg:h-[340px] rounded-[40px]">
                    <div className="grid grid-cols-2 p-8">
                        <div className='space-y-4'>
                            <h3 className="clamp-xl">Notification</h3>
                            <p className="clamp-md">With this option you can activate and deactivate pop-up notifications</p>
                        </div>
                        <div className="flex justify-end items-center p-8"><RoundToggleButton /></div>
                    </div>
                </div>

                <div className="bg_banner w-full h-[272px] max-lg:h-[600px] rounded-[40px]">
                    <div className="grid grid-cols-2 p-8">
                            <div className='space-y-4'>
                                <h3 className="clamp-xl">Change the password</h3>
                                <h4 className="clamp-md mb-2">Password Guidelines:</h4>
                                <ul className="list-disc pl-4">
                                    <li>Use a mix of uppercase, lowercase, numbers, and special characters.</li>
                                    <li>Ensure your password is at least 8 characters long.</li>
                                </ul>
                            </div>

                            <form method="post" action="#">
                                <div className="grid grid-cols-2 p-8">
                                    <div className="flex my-14">
                                        <label htmlFor="password" className="mb-1 clamp-md"></label>
                                        <input id="password" type="password" name="password" className="form-input w-full h-[56px] rounded-[88px] text-black clamp-lg p-4" />
                                    </div>

                                    <div className="flex justify-end items-center p-4">
                                    <input type="submit" value="Accept" className="bg-[#6BDD8F] clamp-lg text-white py-4 px-4 rounded-[88px] w-[190px] " />
                                    </div>

                                </div>
                            </form>

                    </div>
                </div>

            </div>  
        </section>
    )
}