import { Header } from "./components/Header.jsx";
import { Task } from "./components/TaskCarousel.jsx";
import { Stadistics } from "./components/stadistics.jsx";
//import {  } from "";
//import {  } from "";

import "./index.css";

export function App() {

  return (
    <div>
      <Header />
      <Task />
      <Stadistics />

    </div>
  );
}

export default App;