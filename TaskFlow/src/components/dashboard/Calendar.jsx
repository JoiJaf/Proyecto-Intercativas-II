import "../../index.css";

import { useState } from 'react';
import Calendar from 'react-calendar';
<<<<<<< Updated upstream
import 'react-calendar/dist/Calendar.css';


=======
//import 'react-calendar/dist/Calendar.css';
import "../../index.css";
>>>>>>> Stashed changes

export function Cale() {

    // const [selectedDate, setSelectedDate] = useState(null);

    // const onClickDay = (value) => {
    //     console.log('Se ha seleccionado el día:', value);

    //     setSelectedDate(value);
    // };

    //     return (
    //         <div className="m-10 w">
    //             <Calendar
    //                 onClickDay={onClickDay}
    //             />
    //             {selectedDate && (
    //                 <p>{selectedDate.toString()}</p>
    //             )}
    //         </div>
    //     )


    return (
        <div className="w-[50vw] rounded-[2rem] ml-[6rem] my-[5vw] border-[.1rem] px-[3rem] py-[3rem] bg-white">
            <h1 className="text-[1.5rem] font-bold">April 2024</h1>
            <ol className="calendar">
                <li className="font-bold mb-8">Mon</li>
                <li className="font-bold mb-8">Tu</li>
                <li className="font-bold mb-8">We</li>
                <li className="font-bold mb-8">Th</li>
                <li className="font-bold mb-8">Fr</li>
                <li className="font-bold mb-8">Sa</li>
                <li className="font-bold mb-8">Su</li>
                <li className="col-start-1">1</li>
                <li className="mb-4">2</li>
                <li className="mb-4">3</li>
                <li className="mb-4">4</li>
                <li className="mb-4">5</li>
                <li className="mb-4">6</li>
                <li className="mb-4">7</li>
                <li className="mb-4">8</li>
                <li className="mb-4">9</li>
                <li className="mb-4">10</li>
                <li className="mb-4">11</li>
                <li className="mb-4">12</li>
                <li className="mb-4">13</li>
                <li className="mb-4">14</li>
                <li className="mb-4">16</li>
                <li className="mb-4">17</li>
                <li className="mb-4">18</li>
                <li className="mb-4">19</li>
                <li className="mb-4">20</li>
                <li className="mb-4">21</li>
                <li className="mb-4">22</li>
                <li className="mb-4">23</li>
                <li className="mb-4">24</li>
                <li className="mb-4">25</li>
                <li className="mb-4">26</li>
                <li className="mb-4">27</li>
                <li className="mb-4">28</li>
                <li className="mb-4">29</li>
                <li className="mb-4">30</li>

            </ol>
        </div>
    )
}