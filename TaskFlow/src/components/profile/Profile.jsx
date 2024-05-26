import "../../index.css";
import { ProfileHeader } from "./ProfileHeader";
import { PersonalInformation } from "./PersonalInformation";
import { HealthCondition } from "./HealthCondition";

export function Profile() {


  return (
    <section className="grid relative lg:w-full mb-[2.37rem]">
      <section className="absolute bg-[#FCF8EC] h-[54rem] top-[16rem] mb-[2.37rem] w-full max-md:h-[1500px]"></section>
      <h2 className="mt-[2.37rem] ml-[2.37rem] clamp-xxl font-bold">Profile</h2>
      <section className="relative flex items-center justify-center m-[18px]">
        <ProfileHeader />
      </section>

      <section className="relative grid gap-[2.37rem]">
        <form method="post" action="#">
          <h3 className="clamp-xl text-[#323233] font-medium mx-[2.37rem] ">Personal Information</h3>
          <PersonalInformation />
          <HealthCondition />
        </form>
      </section>

    </section>
  )
}
