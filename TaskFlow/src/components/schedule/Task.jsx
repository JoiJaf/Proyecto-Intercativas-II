import "../../index.css";


export function Tasks() {

    return (
        <div className="mt-[12rem] mb-[2rem] bg_banner p-[4rem] mx-[2rem] w-[80rem] rounded-[2rem]">
            <h3 className="fs_xl text-[#fff] pb-[1rem]">Tasks</h3>

            <div className="grid">
                <div className="border-4 border-[#fff] flex gap-[4rem] items-center mb-[1rem]">
                    <img className="w-[15vw]" src="https://biblioteca.acropolis.org/wp-content/uploads/2019/07/Rosa-Mister_Lincoln.jpg" alt="" />
                    <div className="fs_md">
                        <p className="text-[#fff] font-semibold">Task that has to be done that day</p>
                        <p className="text-[#fff] pb-[.8rem]">Category</p>
                        <p className="text-[#fff] font-light">Estimated time</p>
                    </div>
                </div>

                <div className="border-4 border-[#fff] flex gap-[4rem] items-center mb-[1rem]">
                    <img className="w-[15vw]" src="https://biblioteca.acropolis.org/wp-content/uploads/2019/07/Rosa-Mister_Lincoln.jpg" alt="" />
                    <div className="fs_md">
                        <p className="text-[#fff] font-semibold">Task that has to be done that day</p>
                        <p className="text-[#fff] pb-[.8rem]">Category</p>
                        <p className="text-[#fff] font-light">Estimated time</p>
                    </div>
                </div>

                <div className="border-4 border-[#fff] flex gap-[4rem] items-center mb-[1rem]">
                    <img className="w-[15vw]" src="https://biblioteca.acropolis.org/wp-content/uploads/2019/07/Rosa-Mister_Lincoln.jpg" alt="" />
                    <div className="fs_md">
                        <p className="text-[#fff] font-semibold">Task that has to be done that day</p>
                        <p className="text-[#fff] pb-[.8rem]">Category</p>
                        <p className="text-[#fff] font-light">Estimated time</p>
                    </div>
                </div>
                <p className="text-[#A3A3A3] pt-[.5rem] fs_md">Nothing more to do today</p>

            </div>
        </div>
    )


}