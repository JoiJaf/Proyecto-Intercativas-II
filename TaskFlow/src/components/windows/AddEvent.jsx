import "../../index.css";
import { EventCategorySelector } from "./SelectCategories";
import { CalendarDatePicker } from "./CalendarDatePicker";
import { Timeset } from "./Timeset";
import { EventDescription } from "./EventDescription";

export function AddEvent(){
    
    return(
        <form className="ml-[30rem]  w-[30rem] rounded-lg border border-[#979797] mb-[3rem] ">
            <div className="grid grid-cols-[90%_5%]  bg-[#6BDD8F] rounded-t-lg">
                <h1 className="text-[2.5rem] text-center pl-[2rem] text-[#FFFFFF] py-[1rem]">New Event</h1>
                
                <div className="mt-[1.5rem] text-left">
                    <a className="" href="x">
                        <svg c width="1rem" height="1rem" viewBox="0 0 100 100">
                            <line x1="0" y1="0" x2="100" y2="100" stroke="black" strokeWidth="10" />
                            <line x1="0" y1="100" x2="100" y2="0" stroke="black" strokeWidth="10" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="ml-[2rem] mt-[1rem]">
                <input className="text-[1.5rem] border-b-2 border-[black] w-[24.5rem] pl-[1rem]"  
                id="Add Event"
                type="text"
                name="Add Event"
                placeholder="Add Event" />
            </div>
            <div className="ml-[2rem] mt-4">
            <EventCategorySelector/>
            </div>
           <div className="grid grid-cols-[72%_26%] mt-5 ml-[2rem]">
            <CalendarDatePicker/>
            <Timeset/>
           </div>
           <div className="mt-4 mb-6">
                <EventDescription/>
           </div>
           <div className="mb-[2rem] text-center">
                <a className="bg-[#6BDD8F] hover:bg-[#0E0E0E] text-[2rem] text-[#FFFFFF] px-[3rem] py-[.6rem] rounded-lg " href="Mark all as read">Add Event</a>
           </div>
        </form>
    );

}