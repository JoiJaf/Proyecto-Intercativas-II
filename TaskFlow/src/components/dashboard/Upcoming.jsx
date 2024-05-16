import "../../index.css";

export function Upcoming() {

    return (
        <section className="flex gap-[2rem]">
            <div className="border-2 rounded-[4rem] p-[2rem] text-center w-[12vw]">
                <p className="fs_xxl font-bold">I semester 6th week</p>
            </div>

            <div className="grid">
                <div className="flex items-center justify-between pb-2">
                    <h2 class="fs_lg ">Upcoming</h2>
                    <a href="" className="fs_lg clr_gray">View all</a>
                </div>

                <div className="border-2 rounded-[4rem] p-[2rem] flex gap-[4rem] items-center">
                    <img className="w-full max-w-[10rem]" src="https://www.impresoras3d.com/wp-content/uploads/2018/01/Meshmixer-3D.jpg" alt="" />
                    <div>
                        <p className="fs_lg font-light pb-[.8rem]">3D Desing Learning</p>
                        <p className="fs_md font-semibold pb-[.8rem]">Web Design</p>
                        <p className="fs_md font-light">April 15 | 0%</p>
                        <div class="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2.5">
                            <div class="h-4 w-4 bg-red-500 rounded-full animate-full"></div>
                        </div>
                    </div>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-badge-right-filled"
                            width="56" height="56" viewBox="0 0 24 24" stroke-width="1.5" stroke="#323233" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z"
                                stroke-width="0" fill="currentColor" />
                        </svg>
                    </a>

                </div>
            </div>

        </section>
    )
}