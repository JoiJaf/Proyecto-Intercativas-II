

import  {Header} from "./components/basics/Header.jsx"


import { Forms } from "./components/forms/Forms.jsx";

import { Course } from "./components/course/Course.jsx";
import { CoursesPage } from "./components/routes/CoursesPage.jsx"
import { Home } from "./components/routes/Home.jsx";
import { FormsPage } from "./components/routes/FormsPage.jsx";
import { CoursesElementsPage } from "./components/routes/CourseElementsPage.jsx";

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
import { SchedulePage } from "./components/routes/SchedulePage.jsx"

import { Notification } from "./components/windows/Notification.jsx";
import { AddEvent } from "./components/windows/AddEvent.jsx";
// windows ---

//Routes
import {  Navigate, Route, Routes } from "react-router-dom";
import { WelcomePage } from "./components/routes/WelcomePage.jsx";
import { NotificationPage } from "./components/routes/NotificationPage.jsx";
import { InformationCoursePage } from "./components/routes/InformationCoursePage.jsx";

export function App() {
  return (


    <div>


      <Header />

      
      { <Routes>
        <Route path="/welcomePage" element={<WelcomePage />} />

        <Route path="/" element={<Home />} />
        <Route path="/coursesPage" element={<CoursesPage />} />
        <Route path="/formsPage" element={<FormsPage />} />
        <Route path="/coursesElementsPage" element={<CoursesElementsPage />} />
        <Route path="/settingsPage" element={<SettingsPage />} />

        <Route path="/notificationPage" element={<NotificationPage />} />
        <Route path="/informationCoursePage" element={<InformationCoursePage />} />
        <Route path="/*" element={ <Navigate to="/" />}/>
      </Routes> }

        <Route path="/schedulePage" element={<SchedulePage />} />
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

//<Welcome />

//!!!!!!!!!!!!

export default App;
