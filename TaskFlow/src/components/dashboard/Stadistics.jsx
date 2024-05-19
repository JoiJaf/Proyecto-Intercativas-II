
//circular progress bar
import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import "../../index.css";

export function Stadistics() {

    var progress = 70;
    const value = progress;

    <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} styles={{}} />;

    return (
        <section className="bg-[#212121] pt-[2rem] pb-[4rem]">

            <h2 class="fs_xl text-center font-bold text-[#6BDD8F] pb-[1rem]">Estadistics</h2>

            <div className='md:flex gap-[1vw] justify-center items-center'>
                <div className='flex gap-[3rem]'>
                    <div>
                        <div className="grid border-solid border-2 border-[#E0E0E0] w-[15vw] p-[2rem] rounded-[3rem] bg-white">
                            <p className="fs_xxl font-semibold">8</p>
                            <hr className='bg-[#6BDD8F] h-2 w-8 mb-[2vw]' />
                            <p className="fs_lg font-light pb-[3rem] text-[#979797]">Uncompleted tasks</p>
                        </div>
                    </div>

                    <div className="grid border-solid border-2 border-[#E0E0E0] w-[40vw] p-[2vw] rounded-[3rem] bg-white">
                        <div className='flex justify-between'>
                            <p className='text-[#979797] fs_lg font-light w-[15vw] pt-[1vw]'>So far, you've completed tasks this week</p>
                            <div className='flex'>
                                <p className='fs_xxl font-semibold pt-[1vw] pr-8'>2/10</p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-circle" width="40" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                    <path d="M12 9h.01" />
                                    <path d="M11 12h1v4h1" />
                                </svg>
                            </div>

                        </div>
                        <div>
                            <div class="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-4">
                                <div class="h-4 w-4 bg-red-500 rounded-full animate-full"></div>
                            </div>
                        </div>

                    </div>

                    <div className='w-[15vw] z-0'>
                        <CircularProgressbarWithChildren value={value}>

                            <div style={{ fontSize: 12 }}>
                                <strong className='fs_xxl font-bold text-[#fff]'>{progress}%</strong>


                            </div>
                        </CircularProgressbarWithChildren>;
                    </div>

                </div>

            </div>



        </section>
    )
}