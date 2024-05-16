import "../../index.css";
import taskImg from '../../assets/img/task-image.png'

export function CoursesElements() {
    return (
        <section>
            <h1 className="clamp-xxl font-bold ">TM5300- English Reading for Computer Science</h1>
            <div className="mt-4 grid grid-cols-[35%_60%] justify-center mb-10 px-4 py-4 gap-6 form-grid-cols-2 form-mt-8">
                <section className="gap-15 border border-[#E0E0E0] rounded-[1rem] bg-[#0E0E0E] flex flex-col">
                    <div className="flex justify-start pl-4">
                        <h1 className="clamp-xl text-[#6BDD8F] font-bold">Stadistics</h1>
                    </div>
                    <div className="grid p-[1rem] ">
                        <section className="mt-6">
                            <div>
                                <p className="text-[#CCCCCC] clamp-md">This section displays your progress in this course, including the number of tasks
                                    completed and the percentage completed.<br />tasks this weak</p>
                            </div>
                            <div className="flex justify-center mt-7">
                                <h2 className="clamp-xxl font-bold text-[#CCCCCC]">2/10</h2>
                            </div>
                        </section>
                        <div className="flex justify-center mt-20 mb-10">
                            <div className="border-[.8rem] border-[#6BDD8F] p-[1rem] w-[8rem] rounded-[100%] ">
                                <h2 className="clamp-xxl font-bold pt-[.8rem] text-[#CCCCCC]">100%</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="gap-15 border border-[#E0E0E0] rounded-[1rem] overflow-y-auto max-h-[600px] flex flex-col">
                    <div className="flex justify-start pl-4">
                        <h1 className="clamp-xl font-bold text-gray-200">All the tasks</h1>
                    </div>
                    <div className="grid p-[1rem] flex-1">
                        <section className="mt-6 flex flex-col space-y-4">
                            {/* Aquí se repite el bloque para cada elemento del carrusel */}
                            <div className="flex bg-gray-100 rounded-2xl p-4 w-full items-center">
                                <img src={taskImg} alt="Task" />
                                <div className="flex flex-col items-center justify-center flex-1">
                                    <h2 className="text-xl font-semibold text-center">Task Title</h2>
                                    <p className="text-gray-500 text-center">Task Description</p>
                                </div>
                                <input type="checkbox" id="myCheckbox" className="custom-checkbox " />
                               
                            </div>
                            <div className="flex bg-gray-100 rounded-2xl p-4 w-full items-center">
                                <img src={taskImg} alt="Task" />
                                <div className="flex flex-col items-center justify-center flex-1">
                                    <h2 className="text-xl font-semibold text-center">Task Title</h2>
                                    <p className="text-gray-500 text-center">Task Description</p>
                                </div>
                                <input type="checkbox" id="myCheckbox" className="custom-checkbox " />
                               
                            </div>
                            <div className="flex bg-gray-100 rounded-2xl p-4 w-full items-center">
                                <img src={taskImg} alt="Task" />
                                <div className="flex flex-col items-center justify-center flex-1">
                                    <h2 className="text-xl font-semibold text-center">Task Title</h2>
                                    <p className="text-gray-500 text-center">Task Description</p>
                                </div>
                                <input type="checkbox" id="myCheckbox" className="custom-checkbox " />
                               
                            </div>
                           
                          

                            {/* Fin del bloque de repetición */}
                        </section>
                    </div>
                </section>
            </div>
        </section>
    );
}