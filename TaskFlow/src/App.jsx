import { Header } from "./components/Header.jsx";
import { Task } from "./components/TaskCarousel.jsx";
import { Welcome } from "./components/Welcome.jsx";
import { MyProgress } from "./components/MyProgress.jsx";
import { Stadistics } from "./components/Stadistics.jsx";
import { VisualElements } from "./components/VisualElements.jsx";
import { Categories } from "./components/Categories.jsx";
import { CreateAccount } from "./components/CreateAccount.jsx";
import {Forms} from "./components/forms/Forms.jsx";
import {Course} from "./components/Course.jsx";
//import {  } from "";

import "./index.css";

export function App() {

  return (
    <div>
      <Header />
      <Welcome />
      <MyProgress />
      <Stadistics />
      <VisualElements/>
      <Categories/>
      <CreateAccount/>
    </div>
  );
}
//<Header />
//<Welcome />
//<MyProgress />
//<Stadistics />
//<VisualElements/>
//<Categories/>
//<CreateAccount/>
//<Task />
//<Forms />
//<Course/>


export default App;