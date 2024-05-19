import nombrelogo from "../../assets/img/logo-proyecto-blanco.svg";
import "../../index.css";
import { Task } from "../landing/TaskCarousel.jsx";
import { Stadistics } from "../landing/Stadistics.jsx";
import { CreateAccount } from "../landing/CreateAccount.jsx";
import { Category } from "../landing/Category.jsx";

export function Welcome() {
  return (
    <section>
      <div className="grid bg-[url('assets/img/landing.jpg')] mb-40 md:mb-[10rem]">
        <div className="mt-32 text-center mb-32 md:mt-[20rem] md:mb-[15rem]">
          <h1 className="text-2xl mb-8 text-white md:text-3xl md:mb-[2rem]">
            Welcome to
          </h1>
          <div className="mb-8 grid justify-center md:mb-[2rem]">
            <img
              className="w-64 md:w-[25rem]"
              src={nombrelogo}
              alt="nombrelogo"
            />
          </div>
          <button
            className="text-xl text-white py-2 border-2 border-[#6BDD8F] bg-[#6BDD8F] rounded-xl w-48 text-center md:text-3xl md:py-1 md:w-[13rem]"
            href="Start"
          >
            Start
          </button>
        </div>
      </div>
      <div className="mb-[8rem]">
        <Task />
      </div>
      <div>
        <Stadistics />
      </div>
      <div>
        <Category />
      </div>
      <div>
        <CreateAccount />
      </div>
    </section>
  );
}
