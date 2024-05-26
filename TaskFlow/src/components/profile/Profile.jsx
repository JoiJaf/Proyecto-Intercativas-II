import "../../index.css";
import { ProfileHeader } from "./ProfileHeader";
import { PersonalInformation } from "./PersonalInformation";
import { HealthCondition } from "./HealthCondition";

export function Profile() {


  return (
    <section className="grid absolute lg:w-full">
      <section className="absolute bg-[#FCF8EC] h-[960px] top-[130px] mb-[38px] w-full max-md:h-[1500px]"></section>
      <h2 className="mt-[38px] ml-[38px] clamp-xxl font-bold">Profile</h2>
      <section className="relative flex items-center justify-center m-[18px]">
        <ProfileHeader />
      </section>

      <section className="relative grid gap-[38px]">
        <form method="post" action="#">
          <h3 className="clamp-xl text-[#323233] font-medium mx-[38px]">Personal Information</h3>
          <PersonalInformation />
          <HealthCondition />
        </form>
      </section>

    </section>
  )
}
