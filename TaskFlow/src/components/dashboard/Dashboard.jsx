import { Cale } from "./Calendar.jsx";
import { Category } from "./Category.jsx";
import { Upcoming } from "./Upcoming.jsx";
import { Stadistics } from "./Stadistics.jsx";
import { Task } from "./TaskCarousel.jsx";

export function Dashboard() {

    return (
        <div>
            <Task />
            <Stadistics />
            <div className="mx-[4rem] md:grid grid-cols-[40vw_minmax(50vw,_1fr)_100px] mb-[2rem] ">
                <Category />
                <div>
                    <Cale />
                    <Upcoming />
                </div>

            </div>

        </div>
    )
}