import { Header } from "./components/basics/Header.jsx";

import { CoursesPage } from "./components/routes/CoursesPage.jsx";
import { Home } from "./components/routes/Home.jsx";
import { FormsPage } from "./components/routes/FormsPage.jsx";
import { CoursesElementsPage } from "./components/routes/CourseElementsPage.jsx";

import "./index.css";

import { SettingsPage } from "./components/routes/SettingsPage.jsx";
import { SchedulePage } from "./components/routes/SchedulePage.jsx";

import { AddEvent } from "./components/windows/AddEvent.jsx";

//Routes
import { Navigate, Route, Routes } from "react-router-dom";
import { WelcomePage } from "./components/routes/WelcomePage.jsx";
import { NotificationPage } from "./components/routes/NotificationPage.jsx";
import { InformationCoursePage } from "./components/routes/InformationCoursePage.jsx";
import { ProfilePage } from "./components/routes/ProfilePage.jsx";
import { Forms } from "./components/forms/Forms.jsx";

export function App() {
  return (
    <div>

        <Header />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/FormsPage" element={<Forms />} />
        </Routes>
      
    </div>
  );
}

export default App;
