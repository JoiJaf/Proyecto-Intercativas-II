import { InfoWeek } from "./InfoWeek.jsx";
import { Tasks } from "./Task.jsx";
import { Cale } from "../dashboard/Calendar.jsx";
import { TaskToday } from "./TaskToday.jsx";


export function Schedule() {

    return (
        <div>
            
            <InfoWeek/>
            <TaskToday/>
            <div className="grid md:grid-cols-2 md:ml-[4vw]">
                <Cale/>
                <Tasks/>
            </div>
        </div>
    )
}