import "../../index.css";

export function CoursesElements() {
    return (
        <section >
            <h1 className="clamp-xxl font-bold ">TM5300- English Reading for Computer Science</h1>
            <div className="mt-4 grid grid-cols-[35%_60%] justify-center mb-10 px-4 py-4 gap-6 form-grid-cols-2 form-mt-8">
                <section className="gap-15 border border-[#1a1919] rounded-[1rem]">
                    <div className="flex justify-start pl-4">
                    <h1 className="clamp-xl">Stadistics</h1>
                    </div>
                    <div className="grid  p-[1rem]">
                        <section className=" mt-6">
                            <div>
                                <p className="text-[#979797] clamp-md">This section displays your progress in this course, including the number of tasks
                                    completed and the percentage completed.<br />tasks this weak</p>
                            </div>
                            <div className=" flex justify-center mt-7">
                                <h2 className="clamp-xl font-bold">2/10</h2>
                            </div>
                        </section>
                        <div className="flex justify-center mt-20 mb-10">
                        <div className="border-[.8rem] border-[#6BDD8F] p-[1rem] w-[8rem] rounded-[100%] ">
                            <h2 className="text-[2rem] font-bold pt-[.8rem] ">100%</h2>
                        </div>
                        </div>
                    </div>
                </section>
                <section className="gap-15 border border-[#1a1919] rounded-[1rem]">
                    <div className="flex justify-start pl-4">
                    <h1 className="clamp-xl">Stadistics</h1>
                    </div>
                    <div className="grid  p-[1rem]">
                        <section className=" mt-6">
                            <div>
                                <p className="text-[#979797] clamp-md">This section displays your progress in this course, including the number of tasks
                                    completed and the percentage completed.<br />tasks this weak</p>
                            </div>
                            <div className=" flex justify-center mt-7">
                                <h2 className="clamp-xl font-bold">2/10</h2>
                            </div>
                        </section>
                        <div className="flex justify-center mt-20 mb-10">
                        <div className="border-[.8rem] border-[#6BDD8F] p-[1rem] w-[8rem] rounded-[100%] ">
                            <h2 className="text-[2rem] font-bold pt-[.8rem] ">100%</h2>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}