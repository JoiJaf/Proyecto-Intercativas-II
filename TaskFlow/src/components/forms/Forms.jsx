import { useState } from 'react';
import "../../index.css";

export function Forms() {
    const [showLoginForm, setShowLoginForm] = useState(true);

    const toggleForm = () => {
        setShowLoginForm(!showLoginForm);
    };

    return (
        <section className='flex flex-col items-center justify-center my-14 form-mt-8'>
            <div className='bg-white rounded-lg border border-[#979797] px-20 py-8 w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto'>
                <h1 className='clamp-xxl text-center '>{showLoginForm ? 'Login' : 'Sign in'}</h1>
                {showLoginForm ? (
                    <LoginForm />
                ) : (
                    <SignInForm />
                )}
                <p className='mt-8 mb-10 text-center'>
                    {showLoginForm ? "Don't have an account?" : "Already have an account?"}{" "}
                    <button className='text-[#6BDD8F] hover:text-green-600' onClick={toggleForm}>
                        {showLoginForm ? "Sign in" : "Login"}
                    </button>
                </p>
            </div>
        </section>
    );
}

function LoginForm() {
    return (
        <form>
            <div className=' mt-16 mb-16 sm:mt-20 sm:mb-24'>
                <input id='username' type='text' name='username' placeholder='Username' className='form-input border-b-2 clamp-md border-black w-full placeholder-[#0E0E0E]' />
            </div>
            <div className='my-12 sm:my-28'>
                <input id='password' type='password' name='password' placeholder='Password' className='form-input border-b-2 clamp-md border-black w-full placeholder-[#0E0E0E]' />
            </div>
            <div className='flex justify-center my-8'>
                <a href='#' className='clamp-sm text-center text-[#6BDD8F] hover:text-green-600'>Forgot Password?</a>
            </div>
            <div >
                <input type='submit' value='LOGIN' className='bg-[#0E0E0E] clamp-md hover:bg-green-600 text-white py-4 px-4 rounded-md w-full font-bold' />
            </div>
        </form>
    );
}

function SignInForm() {
    return (
        <form>
            <div className='mt-16 mb-16 sm:mb-20'>
                <input id='username' type='text' name='username' placeholder='Username' className='form-input border-b-2 clamp-md border-black w-full placeholder-[#0E0E0E]' />
            </div>
            <div className='my-16 sm:my-20'>
                <input id='password' type='password' name='password' placeholder='Password' className='form-input border-b-2 clamp-md border-black w-full placeholder-[#0E0E0E]' />
            </div>
            <div className='my-16 sm:my-20'>
                <input id='emailAddress' type='email' name='emailAddress' placeholder='Email' className='form-input border-b-2 clamp-md border-black w-full placeholder-[#0E0E0E] ' />
            </div>
            <div >
                <input type='submit' value='SIGN IN' className='bg-[#0E0E0E] clamp-md hover:bg-green-600 text-white py-4 px-4 rounded-md w-full font-bold' />
            </div>
        </form>
    );
}