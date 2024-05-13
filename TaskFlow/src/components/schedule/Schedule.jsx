import { InfoWeek } from "./InfoWeek.jsx";
import { Tasks } from "./Task.jsx";
import { Cale } from "../dashboard/Calendar.jsx";
import { TaskToday } from "./TaskToday.jsx";


export function Schedule() {

    return (
        <div>
            <InfoWeek/>
            <TaskToday/>
            <div className="grid grid-cols-2">
                <Cale/>
                <Tasks/>
            </div>
            
        </div>
    )
}