// Importa la dependencia de react
import React from 'react';
// Importa el archivo CSS principal para estilos globales
import "../../index.css";
// Importa el componente RoundToggleButton
import RoundToggleButton from './ToggleButton';

// Define el componente funcional Notification
export function Notification() {
    return (
        // Componente principal para la sección de notificaciones
        <div className="bg-[#212121] w-full h-[176px] max-md:h-[250px] rounded-[40px]">
            <div className="grid grid-cols-2 p-8 max-md:flex">
                {/* Componente con estilos para el titulo de notificaciones y descripción */}
                <div className='space-y-4'>
                    <h3 className="clamp-xl text-[#6BDD8F] font-medium">Notification</h3>
                    <p className="clamp-md max-md:text-[16px]">With this option you can activate and deactivate pop-up notifications</p>
                </div>
                {/* Componente con estilos para centrar el botón */}
                <div className="flex justify-end p-8 max-md:justify-center max-md:items-end"><RoundToggleButton /></div>
            </div>
        </div>
    );
}