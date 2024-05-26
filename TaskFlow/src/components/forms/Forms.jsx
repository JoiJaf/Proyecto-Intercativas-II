// Importa el hook useState desde React para manejar el estado del componente
import { useState } from 'react';
// Importa el archivo CSS principal para estilos globales
import "../../index.css";

// Define el componente funcional Forms
export function Forms() {
    // Usa el hook useState para manejar el estado de showLoginForm
    const [showLoginForm, setShowLoginForm] = useState(true);

    // Función para alternar entre el formulario de login y el de registro
    const toggleForm = () => {
        setShowLoginForm(!showLoginForm);
    };

    return (
        // Contenedor principal con estilos para centrar el contenido
        <section className='flex flex-col items-center justify-center my-14 form-mt-8'>
            <div className='bg-white rounded-lg border border-[#979797] px-20 py-8 w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto'>
                {/* Título del formulario, cambia según el estado de showLoginForm */}
                <h1 className='clamp-xxl text-center '>{showLoginForm ? 'Login' : 'Sign in'}</h1>
                {/* Renderiza el formulario de login o el de registro según el estado */}
                {showLoginForm ? (
                    <LoginForm />
                ) : (
                    <SignInForm />
                )}
                {/* Texto para alternar entre los formularios */}
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

// Define el componente funcional LoginForm
function LoginForm() {
    return (
        <form>
            {/* Campo de entrada para el nombre de usuario */}
            <div className='mt-16 mb-16 sm:mt-20 sm:mb-24'>
                <input id='username' type='text' name='username' placeholder='Username' className='form-input border-b-2 clamp-md border-black w-full placeholder-[#0E0E0E]' />
            </div>
            {/* Campo de entrada para la contraseña */}
            <div className='my-12 sm:my-28'>
                <input id='password' type='password' name='password' placeholder='Password' className='form-input border-b-2 clamp-md border-black w-full placeholder-[#0E0E0E]' />
            </div>
            {/* Enlace para recuperar la contraseña */}
            <div className='flex justify-center my-8'>
                <a href='#' className='clamp-sm text-center text-[#6BDD8F] hover:text-green-600'>Forgot Password?</a>
            </div>
            {/* Botón de envío del formulario */}
            <div >
                <input type='submit' value='LOGIN' className='bg-[#0E0E0E] clamp-md hover:bg-green-600 text-white py-4 px-4 rounded-md w-full font-bold' />
            </div>
        </form>
    );
}

// Define el componente funcional SignInForm
function SignInForm() {
    return (
        <form>
            {/* Campo de entrada para el nombre de usuario */}
            <div className='mt-16 mb-16 sm:mb-20'>
                <input id='username' type='text' name='username' placeholder='Username' className='form-input border-b-2 clamp-md border-black w-full placeholder-[#0E0E0E]' />
            </div>
            {/* Campo de entrada para la contraseña */}
            <div className='my-16 sm:my-20'>
                <input id='password' type='password' name='password' placeholder='Password' className='form-input border-b-2 clamp-md border-black w-full placeholder-[#0E0E0E]' />
            </div>
            {/* Campo de entrada para el correo electrónico */}
            <div className='my-16 sm:my-20'>
                <input id='emailAddress' type='email' name='emailAddress' placeholder='Email' className='form-input border-b-2 clamp-md border-black w-full placeholder-[#0E0E0E]' />
            </div>
            {/* Botón de envío del formulario */}
            <div >
                <input type='submit' value='SIGN IN' className='bg-[#0E0E0E] clamp-md hover:bg-green-600 text-white py-4 px-4 rounded-md w-full font-bold' />
            </div>
        </form>
    );
}