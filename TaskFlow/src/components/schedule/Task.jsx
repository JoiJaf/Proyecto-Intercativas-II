import "../../index.css";


export function Tasks() {

    return (
        <div className="mt-[1vw] mb-[2rem] mr-[4vw] md:ml-0 ml-[4vw] bg-[#212121] p-[2rem] rounded-[2rem]">
            <h3 className="md:text-[1.2vw] text-[#fff] pb-[1rem] font-semibold">Tasks</h3>

            <div className="grid">
                <div className="border-4 border-[#fff] flex gap-[2vw] items-center mb-[1rem] rounded-[1rem]">
                    <img className="md:w-[11vw] w-[25vw] rounded-[1rem_0_0_1rem]" src="https://biblioteca.acropolis.org/wp-content/uploads/2019/07/Rosa-Mister_Lincoln.jpg" alt="" />
                    <div className="md:text-[1.2vw] text-[2.2vw]">
                        <p className="text-[#fff] font-semibold">Task that has to be done that day</p>
                        <p className="text-[#fff] pb-[.8rem]">Category</p>
                        <p className="text-[#fff] font-light">Estimated time</p>
                    </div>
                </div>

                <div className="border-4 border-[#fff] flex gap-[2vw] items-center mb-[1rem] rounded-[1rem]">
                    <img className="md:w-[11vw] w-[25vw] rounded-[1rem_0_0_1rem]" src="https://biblioteca.acropolis.org/wp-content/uploads/2019/07/Rosa-Mister_Lincoln.jpg" alt="" />
                    <div className="md:text-[1.2vw] text-[2.2vw]">
                        <p className="text-[#fff] font-semibold">Task that has to be done that day</p>
                        <p className="text-[#fff] pb-[.8rem]">Category</p>
                        <p className="text-[#fff] font-light">Estimated time</p>
                    </div>
                </div>

                <div className="border-4 border-[#fff] flex gap-[2vw] items-center mb-[1rem] rounded-[1rem]">
                    <img className="md:w-[11vw] w-[25vw] rounded-[1rem_0_0_1rem]" src="https://biblioteca.acropolis.org/wp-content/uploads/2019/07/Rosa-Mister_Lincoln.jpg" alt="" />
                    <div className="md:text-[1.2vw] text-[2.2vw]">
                        <p className="text-[#fff] font-semibold">Task that has to be done that day</p>
                        <p className="text-[#fff] pb-[.8rem]">Category</p>
                        <p className="text-[#fff] font-light">Estimated time</p>
                    </div>
                </div>

                
                <p className="text-[#A3A3A3] pt-[.5rem] md:text-[1.4vw]">Nothing more to do today</p>

            </div>
        </div>
    )


}