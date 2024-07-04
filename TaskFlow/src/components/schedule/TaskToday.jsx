// Importa el archivo CSS principal
import "../../index.css";
// Importa el hook useNavigate
import { useFetchData } from "../hooks/useFetchData";
/**
 * Crea un componente TaskToday
 * Este componente muestra una secci n con las tareas para hoy
 */
export function TaskToday() {
    /**
     * Areglo de tareas
     * cada tarea tiene un id, un titulo, una descripcion, una hora y una imagen
     */

    const { data, isLoading } = useFetchData();
    /*const authData = localStorage.getItem("auth");
    const parsedAuthData = JSON.parse(authData);
    console.log(parsedAuthData);
    console.log(data);*/

    return (
        <>
            <section className="md:mb-[3rem] mb-[3vw] bg-[#FCF8EC] px-[4vw] pb-[3vw]">
                {/* subtitulo de la seccion de tareas del día seleccionado */}
                <h2 className="md:text-[1.5rem] text-[1rem] font-bold text-center md:mb-[2rem] mb-2 pt-[2rem]">Today</h2>
                <div>
                    {data.map((task) => (
                        /**
                         * Muestra cada tarea en una div con un estilo determinado
                         */
    
                        <div className="bg-white md:p-[2vw] p-[1.4rem] border-2 rounded-[2rem] flex mx-[2vw] justify-between pr-[4rem] mb-[2vw] hover:scale-[0.98] hover:duration-700 hover:border-[#9d9d9d]">
                            <div className="flex">
                                <img className="md:w-[12vw] w-[20vw] md:h-[8vw] h-[15vw]" src={task.image} alt="image" />
                                <div className="ml-[10vw] md:mr-0  flex flex-col justify-center">
                                    <p className="md:text-[1.5rem] text-[1rem] font-semibold m-0">{task.title}</p>
                                    <p className="md:text-[1.3rem] text-[.8rem] mb-[1vw] m-0">{task.description}</p>
                                    <p className="md:text-[1rem] text-[.6rem] text-[#6E6E6E]">{task.created_at}</p>
                                </div>
                            </div>
                            <input className="w-[3vw] ml-6" type="checkbox" value="" />
                        </div>
                    
                    ))}
                </div>

            </section>
        </>
    )
}
