import "../../index.css";

export function TaskToday() {

    return (
        <section className="mb-[3rem] bg-[#FCF8EC] px-[4vw] pb-[3vw]">
            <h2 className="fs_xl font-bold text-center mb-[2rem] pt-[2rem]">Today</h2>

            <div className="bg-white p-[2vw] border-2 rounded-[2rem] flex mx-[2vw] justify-between pr-[4rem] mb-[2vw]">
                <div className="flex">
                    <img className="w-[12vw] h-[8vw]" src="https://edifica.com.pe/blog/wp-content/uploads/2022/09/que-es-edificio-inteligente.jpg" alt="" />

                    <div className="ml-[8rem] flex flex-col justify-center">
                        <p className="fs_xl font-semibold m-0">Task title</p>
                        <p className="fs_xl mb-[1vw] m-0">Task description</p>
                        <p className="fs_md text-[#6E6E6E]">Friday, 13:00</p>
                    </div>
                </div>
                <input className="w-[3vw] " type="checkbox" value="" />
            </div>

            <div className="bg-white p-[2vw] border-2 rounded-[2rem] flex mx-[2vw] justify-between pr-[4rem] mb-[2vw]">
                <div className="flex">
                    <img className="w-[12vw] h-[8vw]" src="https://edifica.com.pe/blog/wp-content/uploads/2022/09/que-es-edificio-inteligente.jpg" alt="" />

                    <div className="ml-[8rem] flex flex-col justify-center">
                        <p className="fs_xl font-semibold m-0">Task title</p>
                        <p className="fs_xl mb-[1vw] m-0">Task description</p>
                        <p className="fs_md text-[#6E6E6E]">Friday, 13:00</p>
                    </div>
                </div>
                <input className="w-[3vw] " type="checkbox" value="" />
            </div>

            <div className="bg-white p-[2vw] border-2 rounded-[2rem] flex mx-[2vw] justify-between pr-[4rem] mb-[2vw]">
                <div className="flex">
                    <img className="w-[12vw] h-[8vw]" src="https://edifica.com.pe/blog/wp-content/uploads/2022/09/que-es-edificio-inteligente.jpg" alt="" />

                    <div className="ml-[8rem] flex flex-col justify-center">
                        <p className="fs_xl font-semibold m-0">Task title</p>
                        <p className="fs_xl mb-[1vw] m-0">Task description</p>
                        <p className="fs_md text-[#6E6E6E]">Friday, 13:00</p>
                    </div>
                </div>
                <input className="w-[3vw] " type="checkbox" value="" />
            </div>
        </section>
    )


}