import "../../index.css";
import { EventCategorySelector } from "./SelectCategories";
import { CalendarDatePicker } from "./CalendarDatePicker";
import { Timeset } from "./Timeset";
import { EventDescription } from "./EventDescription";

export function AddEvent() {
  return (
    <form className="w-full max-w-[30rem] mt-[6rem] rounded-lg border border-[#979797] mb-[3rem] mx-auto px-4 sm:px-8">
      <div className="mt-[1.5rem] text-end pr-8">
        <button className="" href="x">
          <svg width="1rem" height="1rem" viewBox="0 0 100 100">
            <line
              x1="0"
              y1="0"
              x2="100"
              y2="100"
              stroke="black"
              strokeWidth="10"
            />
            <line
              x1="0"
              y1="100"
              x2="100"
              y2="0"
              stroke="black"
              strokeWidth="10"
            />
          </svg>
        </button>
      </div>

      <div className="text-center">
        <h1 className="text-[2rem] md:text-[2.5rem] text-center text-black py-[1rem]">
          New Event
        </h1>
      </div>
      <div className="mt-4 px-4 md:px-0">
        <EventCategorySelector />
      </div>
      <div className="mt-[1rem] px-4 md:px-0">
        <input
          className="text-[1.25rem] md:text-[1.5rem] border-b-2 border-black w-full md:w-[24.5rem] pl-[1rem]"
          id="Key Word"
          type="text"
          name="Add Key Word"
          placeholder="Add Key Word"
        />
      </div>
      <div className="mt-5 px-4 md:px-0">
        <CalendarDatePicker />
      </div>
      <div className="mt-5 px-4 md:px-0">
        <Timeset />
      </div>
      <div className="mt-5">
        <button className="flex " href=" Add Image">
          Add Image
          <svg
            className="bg-black ml-2"
            width="20"
            height="20"
            viewBox="0 0 100 100"
          >
            <line
              x1="20"
              y1="50"
              x2="80"
              y2="50"
              stroke="white"
              stroke-width="10"
            />

            <line
              x1="50"
              y1="20"
              x2="50"
              y2="80"
              stroke="white"
              stroke-width="10"
            />
          </svg>
        </button>
      </div>
      <div className="mt-[1rem] px-4 md:px-0">
        <input
          className="text-[1.25rem] md:text-[1.5rem] border-b-2 border-black w-full md:w-[24.5rem] pl-[1rem]"
          id="Homework Percentage"
          type="text"
          name="Add Homework Percentage"
          placeholder="Add Homework Percentage"
        />
      </div>
      <div className="mt-4 mb-6 px-4 md:px-0">
        <EventDescription />
      </div>
      <div className="mb-[2rem] text-center">
        <button
          className="bg-[#0E0E0E] hover:bg-[#6BDD8F] text-[1.5rem] md:text-[2rem] text-white px-6 md:px-[3rem] py-2 md:py-[.6rem] rounded-lg"
          href="Add Event"
        >
          Add Event
        </button>
      </div>
    </form>
  );
}
