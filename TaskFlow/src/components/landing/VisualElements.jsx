import "../../index.css";
import { Calendar } from "./Calendar";

export function VisualElements(){
    return(
        <section className=" bg-[#F3F3F3] mt-[5rem]  grid grid-cols-[60%_35%]">

            <div className="pt-[5rem] pb-[5rem]">
                <div className="">
                    <Calendar/>    
                </div>

                <div className="border border-[#b8b6b6] p-[1rem] w-[9rem] rounded-[1rem] ml-[35rem] bg-white mt-[-20rem]">
                        <p className="font-bold fs_md mb-[rem]">Today is</p>
                        <p className="text-[1.5rem] font-bold w-[8vw] mr-[3vw] mb-2">Monday</p>
                        <p className="font-semibold mb-[2rem]">April 29, 2024</p>
                        <p className="text-[#323233]">9:00am</p>
                </div>

                <div className="border border-[#b8b6b6] p-[1rem] w-[7rem] rounded-[1rem]  bg-white ml-[35rem] mt-[2rem]">
                        <p className="font-bold fs_md mb-[rem]">I Semester</p>
                        <p className="text-[1.5rem] font-bold w-[8vw] mr-[3vw] mb-2">6th</p>
                        <p className="font-semibold text-[1.5rem] ">Week</p>
                </div>    
            </div>

            <div className="mt-[8rem]">
                <p className="text-[2rem]">
                    With visual elements that keep<br/>
                    you informed of the moment and<br/>
                    help you deliver your tasks on<br/>
                    time.
                </p>
            </div>
        </section>
    )
}