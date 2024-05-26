import React from 'react';
import "../../index.css";

export function PasswordChange() {
    return (
        <div className="bg-[#212121] w-full h-[272px] max-md:h-[600px] rounded-[40px]">
            <div className="grid grid-cols-2 p-8 max-md:grid-cols-1">
                <Guidelines />
                <PasswordForm />
            </div>
        </div>
    );
}

function Guidelines() {
    return (
        <div className='space-y-4'>
            <h3 className="clamp-xl text-[#6BDD8F] font-medium">Change the password</h3>
            <h4 className="clamp-md mb-2">Password Guidelines:</h4>
            <ul className="list-disc pl-4">
                <li>Use a mix of uppercase, lowercase, numbers, and special characters.</li>
                <li>Ensure your password is at least 8 characters long.</li>
            </ul>
        </div>
    );
}

function PasswordForm() {
    return (
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
    );
}
