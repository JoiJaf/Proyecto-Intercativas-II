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

export function App() {
  return (
    <div>
      <Header />

      {
        <Routes>
          <Route path="/welcomePage" element={<WelcomePage />} />

          <Route path="/" element={<Home />} />
          <Route path="/coursesPage" element={<CoursesPage />} />
          <Route path="/formsPage" element={<FormsPage />} />
          <Route
            path="/coursesElementsPage"
            element={<CoursesElementsPage />}
          />
          <Route path="/settingsPage" element={<SettingsPage />} />

          <Route path="/notificationPage" element={<NotificationPage />} />
          <Route
            path="/informationCoursePage"
            element={<InformationCoursePage />}
          />
          <Route path="/*" element={<Navigate to="/" />} />

          <Route path="/schedulePage" element={<SchedulePage />} />

          <Route path="/profilePage" element={<ProfilePage />} />

          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      }
    </div>
  );
}

export default App;
