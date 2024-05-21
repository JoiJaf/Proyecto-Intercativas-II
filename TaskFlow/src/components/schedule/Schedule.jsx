import { InfoWeek } from "./InfoWeek.jsx";
import { Tasks } from "./Task.jsx";
import { Cale } from "../dashboard/Calendar.jsx";
import { TaskToday } from "./TaskToday.jsx";
import {Header} from "../basics/Header.jsx"
import {Footer} from "../basics/Footer.jsx"


export function Schedule() {

    return (
        <div>
            <Header/>
            <InfoWeek/>
            <TaskToday/>
            <div className="grid md:grid-cols-2 md:ml-[4vw]">
                <Cale/>
                <Tasks/>
            </div>
            <Footer/>
        </div>
    )
}