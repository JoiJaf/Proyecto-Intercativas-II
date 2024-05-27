// Importa el archivo CSS principal
import "../../index.css";

// Define componente funcional ProfileHeader
export function ProfileHeader() {
    return (
        // Contenedor principal de inicio del perfil de usuario
        <div className="grid grid-cols-3 gap-4 items-center max-md:grid-cols-1">
          {/* Imagen de de perfil del usuario */}
          <div className="m-[20px] flex justify-center items-center">
            <img className="rounded-full item-center" src="../src/assets/img/profile.png" alt="profile" />
          </div>
          {/* Información del usuario: nombre y correo electrónico */}
          <div className="flex flex-col max-md:items-center">
            <h1 className="mt-[38px] clamp-xxl font-bold">María Segura Umaña</h1>
            <p className="text-[#A7A7A7] clamp-md">mariaumasegur@example.com</p>
          </div>
          {/* Contenedor del botón de envío del formulario */}
          <div className="flex justify-center items-center p-4 max-md:mb-[38px]">
            <input type="submit" value="Update" className="bg-[#212121] clamp-lg text-white py-4 px-4 rounded-[20px] w-[190px]" />
          </div>
        </div>
      );
}
