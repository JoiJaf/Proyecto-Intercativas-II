
import { Header } from "./components/basics/Header.jsx";


import { Welcome } from "./components/landing/Welcome.jsx";
import { MyProgress } from "./components/landing/MyProgress.jsx";
import { Stadisticslanding } from "./components/landing/Stadisticslanding.jsx";
import { VisualElements } from "./components/landing/VisualElements.jsx";
import { Categories } from "./components/landing/Categories.jsx";
import { CreateAccount } from "./components/landing/CreateAccount.jsx";
import { Footer } from "./components/basics/Footer.jsx";
import { CoursesElements } from "./components/coursesElements/CoursesElements.jsx"

import { Forms } from "./components/forms/Forms.jsx";

import { Course } from "./components/course/Course.jsx";

//dashboard ---------
import { Dashboard } from "./components/dashboard/Dashboard.jsx";
//dashboard ---------

// schedule ----------
import { InfoWeek } from "./components/schedule/InfoWeek.jsx";
import { TaskToday } from "./components/schedule/TaskToday.jsx";
import { TaskCal } from "./components/schedule/TaskCal.jsx";
import { Tasks } from "./components/schedule/Task.jsx";
// schedule ----------

import { Profile } from "./components/profile/Profile.jsx";

//import {  } from "";

import "./index.css";
import { Settings } from "./components/settings/Settings.jsx";

import { Notification } from "./components/windows/Notification.jsx";
import { AddEvent } from "./components/windows/AddEvent.jsx";
// windows ---
export function App() {

  return (
    <div>
      <Header />
      <Dashboard/>
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
//<Header />
//<Welcome />
//<MyProgress />
//<Stadisticslanding />
//<VisualElements/>
//<Categories/>
//<CreateAccount/>
//<Footer />
//!!!!!!!!!!!!

export default App;