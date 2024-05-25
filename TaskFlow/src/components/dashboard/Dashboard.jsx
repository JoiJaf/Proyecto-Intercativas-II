import { Cale } from "./Calendar.jsx";
import { Category } from "./Category.jsx";
import { Stadistics } from "./Stadistics.jsx";
import { Task } from "./TaskCarousel.jsx";
import { Today } from "./Today.jsx";
import { Header } from "../basics/Header.jsx"
import { Footer } from "../basics/Footer.jsx"

export function Dashboard() {

    return (
        <div>
           
            <Task />
            <div className="md:flex bg-[#FCF8EC] mt-[2rem] pt-[2rem] pb-[4rem] ">
                <Today />
                <Cale />
            </div>
            <Stadistics />
            <Category />
            <Footer />
        </div>
    )
}