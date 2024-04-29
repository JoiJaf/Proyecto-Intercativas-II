import "../../index.css";
import user from '../../assets/img/user.png';
import carre from '../../assets/img/carre.png';
import course from '../../assets/img/course.png';
import est from '../../assets/img/est.png';
import uni from '../../assets/img/uni.png';

export function Categories(){
    return(
        <section className="grid grid-cols-[35.5%_24.5%_30%] gap-[4rem] mb-[4rem] mt-[3rem]">
            <div className="mt-[8rem] ml-[3rem]">
                <p className="text-[1.9rem] font-bold text-center">Use the different filters and options<br/>
                to search for your tasks more<br/>
                efficiently.</p>
            </div>
            <div>

            <div class="flex items-center gap-2 mt-[10rem] ml-[7rem] mb-[3rem]">
                    <div className='pr-[.5rem] flex items-center gap-5'>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="30" height="30"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                            </svg>
                        </a>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="30"
                                height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                <path d="M16 3l0 4" />
                                <path d="M8 3l0 4" />
                                <path d="M4 11l16 0" />
                                <path d="M8 15h2v2h-2z" />
                            </svg>
                        </a>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code" width="30" height="30"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M7 8l-4 4l4 4" />
                                <path d="M17 8l4 4l-4 4" />
                                <path d="M14 4l-4 16" />
                            </svg>
                        </a>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="30" height="30"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                            </svg>
                        </a>

                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="30" height="30"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                                <path d="M3 7l9 6l9 -6" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="flex items-center bg-slate-200 header-corto rounded-full px-6 py-8 w-[2rem]">
                        <input class="w-[25rem] bg-transparent outline-none text-2xl" type="text" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search cursor-pointer" width="44" height="44"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                            <path d="M21 21l-6 -6" />
                        </svg>
                    </div>
            </div>

            <div>

                <div className=" ml-[9rem]">
                    <h2 class="fs_xl pt-10 pb-10 pl-[6rem]">Categories</h2>

                    <section className="grid grid-cols-[20%_80%] gap-6 ml-[1rem] ">
                        <div>
                            <img className="rounded-lg" src={`${carre}`} alt="upcoming event" />
                        </div>
                        <div className="flex justify-center flex-col ">
                            <h1>Careers</h1>
                        </div>

                        <div>
                            <img className="rounded-lg" src={`${course}`} alt="upcoming event" />
                        </div>
                        <div className="flex justify-center flex-col">
                            <h1>Courses</h1>
                        </div>

                        <div>
                            <img className="rounded-lg" src={`${uni}`} alt="upcoming event" />
                        </div>
                        <div className="flex justify-center flex-col">
                            <h1>University</h1>
                        </div>

                        <div>
                            <img className="rounded-lg" src={`${est}`} alt="upcoming event" />
                        </div>
                        <div className="flex justify-center flex-col">
                            <h1>Student</h1>
                        </div>

                    </section>
                </div>
                
            </div>

        </section>
    )
}