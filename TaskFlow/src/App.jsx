

import  {Header} from "./components/basics/Header.jsx"



import { Welcome } from "./components/landing/Welcome.jsx";
import { MyProgress } from "./components/landing/MyProgress.jsx";
import { Stadisticslanding } from "./components/landing/Stadisticslanding.jsx";
import { VisualElements } from "./components/landing/VisualElements.jsx";
import { Categories } from "./components/landing/Categories.jsx";
import { CreateAccount } from "./components/landing/CreateAccount.jsx";
import { Footer } from "./components/basics/Footer.jsx";
import { CoursesElements } from "./components/coursesElements/CoursesElements.jsx";

import { Forms } from "./components/forms/Forms.jsx";

import { Course } from "./components/course/Course.jsx";
import { CoursesPage } from "./components/routes/CoursesPage.jsx"
import { Home } from "./components/routes/Home.jsx";

//dashboard ---------
import { Dashboard } from "./components/dashboard/Dashboard.jsx";
//dashboard ---------

// schedule ----------
import { Schedule } from "./components/schedule/Schedule.jsx";
// schedule ----------

import { Profile } from "./components/profile/Profile.jsx";

//import {  } from "";

import "./index.css";

import { SettingsPage } from "./components/routes/SettingsPage.jsx"

import { Notification } from "./components/windows/Notification.jsx";
import { AddEvent } from "./components/windows/AddEvent.jsx";
// windows ---

//Routes
import {  Navigate, Route, Routes } from "react-router-dom";
export function App() {
  return (


    <div>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coursesPage" element={<CoursesPage />} />
        <Route path="/settingsPage" element={<SettingsPage />} />
        <Route path="/*" element={ <Navigate to="/" />}/>
      </Routes>
    </div>
  );
}

//<Route path="/*" element={ <Navigate to="/" />}
//COURSE
//<Course/>

//PROFILE
//<Profile/>

//DASHBOARD
//<Dashboard/>

//SETTINGS
//<Settings/>

//WINDOWS
//<AddEvent/>
//<Notification/>

//SCHEDULE
//<InfoWeek/>
//<TaskToday/>
//<TaskCal/>
// <Tasks/>

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
