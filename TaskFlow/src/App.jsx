
import { Header } from "./components/basics/Header.jsx";


import { Welcome } from "./components/landing/Welcome.jsx";
import { MyProgress } from "./components/landing/MyProgress.jsx";
import { Stadisticslanding } from "./components/landing/Stadisticslanding.jsx";
import { VisualElements } from "./components/landing/VisualElements.jsx";
import { Categories } from "./components/landing/Categories.jsx";
import { CreateAccount } from "./components/landing/CreateAccount.jsx";
import { Footer } from "./components/basics/Footer.jsx";

import { Forms } from "./components/forms/Forms.jsx";

import { Course } from "./components/course/Course.jsx";

//dashboard ---------
import { Cale } from "./components/dashboard/Calendar.jsx";
import { Category } from "./components/dashboard/Category.jsx";
import { Upcoming } from "./components/dashboard/Upcoming.jsx";
import { Stadistics } from "./components/dashboard/Stadistics.jsx";
import { Task } from "./components/dashboard/TaskCarousel.jsx";
//dashboard ---------

// schedule ----------
import { InfoWeek } from "./components/schedule/InfoWeek.jsx";
import { TaskToday } from "./components/schedule/TaskToday.jsx";
import { TaskCal } from "./components/schedule/TaskCal.jsx";
import { Tasks } from "./components/schedule/Task.jsx";
// schedule ----------

//import {  } from "";

import "./index.css";

export function App() {

  return (
    <div>
      <Header />
      <Stadistics />
      <Footer />
      
    </div>
  );
}

//COURSE
//<Course/>

//DASHBOARD
//<Task/>
//<Stadistics/>

//FORMS
//<Forms/>

//WELCOME PAGE
//<Welcome />
//<MyProgress />
//<Stadisticslanding />
//<VisualElements/>
//<Categories/>
//<CreateAccount/>
//!!!!!!!!!!!!

export default App;