// Importa el archivo CSS principal
import "../../index.css";
// Importa los componente ProfileHeader, PersonalInformation y HealthCondition
import { ProfileHeader } from "./ProfileHeader";
import { PersonalInformation } from "./PersonalInformation";
import { HealthCondition } from "./HealthCondition";

// Define el componente funcional Profile
export function Profile() {
  return (
    // Contenedor principal con estilos para el componente perfil
    <section className="grid relative lg:w-full mb-[2.37rem]">
      <section className="absolute bg-[#FCF8EC] h-[54rem] top-[16rem] mb-[2.37rem] w-full max-md:h-[1500px]"></section>
      <h2 className="mt-[2.37rem] ml-[2.37rem] clamp-xxl font-bold">Profile</h2>
      {/* Formulario para cambiar información de perfil */}
      <form method="post" action="#">
      {/* Renderiza ProfileHeader, seccion principal de perfil */}
      <section className="relative flex items-center justify-center m-[18px]">
        <ProfileHeader />
      </section>

      {/* Renderiza PersonalInformation y HealthCondition, otras secciones de perfil */}
      <section className="relative grid">
        <h3 className="clamp-xl text-[#323233] font-medium mx-[2.37rem] ">Personal Information</h3>
        <PersonalInformation />
        <HealthCondition />
      </section>
      </form>
    </section>
  )
}
