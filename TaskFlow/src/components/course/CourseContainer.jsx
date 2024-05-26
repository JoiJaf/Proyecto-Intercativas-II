// Importa el archivo CSS principal para estilos globales
import "../../index.css";

// Importa el componente Course
import { Course } from "./Course";

// Define el componente funcional CourseContainer
export function CourseContainer({ items }) {
    return (
        <>
            {/* Título */}
            <div className="mt-8 ml-4 sm:ml-10 gap-x-4">
                <h1 className="clamp-xxl text-start text-center-mb">My courses</h1>
            </div>
            {/* Contenedor de cursos con diseño de cuadrícula */}
            <div className="grid grid-cols-3 gap-4 my-5 form-grid-cols-2 px-4 mb-40">
                {/* Mapea sobre los items y renderiza un componente Course por cada uno */}
                {items.map(item => (
                    <Course 
                        key={item.id} // Identificador único para cada componente Course
                        name={item.name} // Propiedad name del curso
                        description={item.description} // Propiedad description del curso
                        image={item.image} // Propiedad image del curso
                    />
                ))}
            </div>
        </>
    );
}