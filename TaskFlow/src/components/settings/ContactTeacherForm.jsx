// Importa la dependencia de react
import React from 'react';
// Importa el archivo CSS principal para estilos globales
import "../../index.css";

// Función para mostrar el formulario de contacto
function ContactForm() {
    return (
        <form method="post" action="#">
            {/* Componente para el campo de entrada para el email */}
            <div className="flex mb-5">
                <label htmlFor="email" className="mb-1 clamp-md"></label>
                <input id="email" type="text" name="email" className="form-input w-full h-[79px] rounded-[20px] text-black clamp-lg p-4 border-[#EEEEEE] border-2"/>
            </div>

            {/* Componente para el campo de entrada para el asunto */}
            <div className="flex my-5">
                <label htmlFor="matter" className="mb-1 clamp-md"></label>
                <input id="matter" type="matter" name="matter" className="form-input w-full h-[79px] rounded-[20px] text-black clamp-lg p-4 border-[#EEEEEE] border-2"/>
            </div>

            {/* Componente para el campo de entrada para el texto */}
            <div className="flex mb-14 items-start">
                <label htmlFor="message" className="mb-1 clamp-md"></label>
                <textarea id="message" type="text" name="message" className="form-input w-full h-[256px] rounded-[40px] text-black clamp-lg p-4 border-[#EEEEEE] border-2 items-left"/>
            </div>

            {/* Componente del botón de envío del formulario */}
            <div className="flex justify-end max-md:justify-center items-center p-4 mb-[114px]">
                <input type="submit" value="Send" className="bg-[#323233] clamp-lg text-white py-4 px-4 rounded-[20px] w-[190px]" />
            </div>
        </form>
    );
}

// Define el componente funcional ContactTeacherForm
export function ContactTeacherForm() {
    return (
        // Contenedor principal con estilos para el sistema de contacto con el profesor
        <div className='w-full bg-[#FCF8EC]'>
            <h2 className="my-[38px] ml-[30px] clamp-xxl font-bold pt-[38px]">Contact with the teacher</h2>
                <div className='grid grid-cols-2 gap-[38px] max-md:grid-cols-1'>
                    {/* Componente con la imagen de referencia del sistema de contacto con el profesor */}
                    <div className='mx-[38px]'>
                        <img className='w-full h-auto' src="../src/assets/img/contactTeacher.png" alt="contact with the teacher" />
                    </div>
                    {/* Renderiza el componente ContactForm */}
                    <div className='mx-[38px]'>
                        <ContactForm />
                    </div>
                </div>                                                     
        </div>
    );
}