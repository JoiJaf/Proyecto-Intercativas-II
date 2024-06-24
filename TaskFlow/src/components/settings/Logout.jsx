// Importa la dependencia de react
import React from 'react';
// Importa el archivo CSS principal para estilos globales
import "../../index.css";
// Importa el hook useNavigate
import { useNavigate } from 'react-router-dom';

// Define el componente funcional Logout
export function Logout() {

    // Define el hook useNavigate
    const navigate = useNavigate();

    // Define un método handleLogout para cerrar la sesión
    const handleLogout = () => {
        // Borra los datos de localStorage
        //localStorage.clear();
        localStorage.removeItem('auth');
        console.log("Se ha borrado los datos del localStorage");
        // Redige al usuario a la página de home
        navigate('/home');
    };

    // Renderiza el componente Logout
    return (
        <div className='justify-start'>
            {/* Botón para cerrar sesión */}
             <button className='flex clamp-lg hover:text-[#6BDD8F] ml-[3rem] my-5' onClick={handleLogout}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
            <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
            </svg>Log out</button>
        </div>
    );
}