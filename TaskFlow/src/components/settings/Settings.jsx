// Importa la dependencia de react
import React from 'react';
// Importa el archivo CSS principal para estilos globales
import "../../index.css";
// Importa los componentes Notification, PasswordChange y ContactTeacherForm
import { Notification } from './Notification';
import { PasswordChange } from './PasswordChange';
import { ContactTeacherForm } from './ContactTeacherForm';

// Define el componente funcional Settings
export function Settings() {

    return (
        // Contenedor principal con estilos para el sistema de configuración
        <section className='grid justify-center items-center'>
            <section className='mx-4 mb-0'>
                <h2 className="my-[38px] ml-[30px] clamp-xxl font-bold">Settings</h2> 
                    {/* Renderiza Notification y PasswordChange, secciones principal de configuración */}
                    <div className="grid text-white gap-[38px]">
                        <Notification />
                        <PasswordChange />
                    </div>  
            </section>
            {/* Renderiza contactTeacherForm, segunda sección de configuración */}
            <div>
                <ContactTeacherForm />
            </div>
        </section>
    )
}
