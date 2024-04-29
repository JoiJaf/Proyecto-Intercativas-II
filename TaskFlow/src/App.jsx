
import { Header } from "./components/basics/Header.jsx";
import { Task } from "./components/dashboard/TaskCarousel.jsx";
import { Welcome } from "./components/landing/Welcome.jsx";
import { MyProgress } from "./components/landing/MyProgress.jsx";
import { Stadisticslanding } from "./components/landing/Stadisticslanding.jsx";
import { VisualElements } from "./components/landing/VisualElements.jsx";
import { Categories } from "./components/landing/Categories.jsx";
import { CreateAccount } from "./components/landing/CreateAccount.jsx";
import { Footer } from "./components/basics/Footer.jsx";

import { Forms } from "./components/forms/Forms.jsx";

import { Course } from "./components/course/Course.jsx";

//import {  } from "";

import "./index.css";
import { Settings } from "./components/settings/Settings.jsx";

export function App() {

  return (
    <div>
      <Header />
      <Settings />
      <Footer/>
    </div>
  );
}

//COURSE
//<Course/>

//DASHBOARD
//<Task/>

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