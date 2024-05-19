
//circular progress bar
import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import "../../index.css";

export function Stadistics() {

    var progress = 70;
    const value = progress;

    <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} styles={{}} />;

    return (
        <section className="bg-[#212121] pt-[2vw] pb-[4vw]">

            <h2 class="md:text-[2vw] text-center font-bold text-[#6BDD8F] pb-[1rem]">Estadistics</h2>

            <div className='flex gap-[1vw] justify-center items-center'>
                <div className='md:flex md:gap-[3rem] gap-4 grid'>
                    
                        <div className="grid border-solid border-2 border-[#E0E0E0] md:w-[15vw] w-auto p-[2rem] rounded-[3rem] bg-white">
                            <p className="md:text-2xl text-[1rem] font-semibold">8</p>
                            <hr className='bg-[#6BDD8F] h-2 w-8 mb-[2vw]' />
                            <p className="md:text-[1.5vw] font-light md:pb-[3rem] text-[#979797]">Uncompleted tasks</p>
                        </div>
                    

                    <div className="grid border-solid border-2 border-[#E0E0E0] md:w-[40vw] w-[80vw] md:h-auto p-[2vw] rounded-[3rem] bg-white">
                        <div className='flex justify-between px-4 pb-2'>
                            <p className='text-[#979797] md:text-[1rem] text-[.8rem] font-light md:w-[15vw] pt-[1rem]'>So far, you've completed tasks this week</p>
                            <div className='flex'>
                                <p className='md:text-2xl text-[1rem] font-semibold pt-[1rem] pr-8'>2/10</p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-circle w-[3vw]" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                    <path d="M12 9h.01" />
                                    <path d="M11 12h1v4h1" />
                                </svg>
                            </div>

                        </div>
                        <div className='md:p-0 pb-8'>
                            <div class="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-4">
                                <div class="h-4 w-4 bg-red-500 rounded-full animate-full"></div>
                            </div>
                        </div>

                    </div>

                    <hr className='md:hidden'  />

                    <div className='md:w-[15vw] w-[10rem] z-0 m-auto'>
                        <CircularProgressbarWithChildren value={value}>

                            <div style={{textAlign: 'center'}}>
                                <strong className='md:text-[2vw] font-bold text-[#fff]'>{progress}%</strong>
                                <p className='md:text-[1.2vw] font-bold text-[#fff] '>Your week <br /> porcentage</p>

                            </div>
                        </CircularProgressbarWithChildren>;
                    </div>
                </div>

            </div>



        </section>
    )
}