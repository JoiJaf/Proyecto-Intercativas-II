import "../../index.css";

export function Profile() {

    return (
        <section>

            <div className="absolute bg-[#FCF8EC] w-full h-[760px] top-[400px] mb-[38px]"></div>
            <section className="relative">
                    <section className="w-full">
                        <h2 className="mt-[38px] ml-[38px] clamp-xxl font-bold">Profile</h2> 
                            <div className="grid grid-cols-3 gap-4 items-center">
                                <div className="m-[38px]">
                                    <img className="w-[426px] h-[418px] rounded-full" src="../src/assets/img/profile.png" alt="profile" />
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="mt-[38px] clamp-xxl font-bold">María Segura Umaña</h1>
                                    <p className="text-[#A7A7A7] clamp-md">mariaumasegur@example.com</p>
                                </div>
                                <div className="flex justify-center items-center p-4">
                                    <input type="submit" value="Update" className="bg-[#212121] clamp-lg text-white py-4 px-4 rounded-[20px] w-[190px]" />
                                </div>
                            </div>
                    </section>
                
                    <section className="grid gap-[38px]"> 
                    <form method="post" action="#">
                    <h3 className="clamp-xl text-[#323233] font-medium mx-[38px]">Personal Information</h3>
                    <section className="mb-[76px] mx-[38px]">
                        <div className="grid grid-cols-2 gap-8 text-[#A7A7A7]">
                            <div>
                                <div className="grid my-14">
                                    <label htmlFor="carnet" className="clamp-md mb-1">Carnet</label>
                                    <input id="carnet" type="text" name="carnet" value="C13838" className="form-input w-full h-[85px] rounded-[20px] text-black clamp-lg p-4 border-[#EEEEEE] border-2" />
                                </div>


                                <div className="grid my-14">
                                    <label htmlFor="career" className="clamp-md mb-1">Career</label>
                                    <input id="career" type="text" name="career" value="ITM" className="form-input w-full h-[85px] rounded-[20px] text-black clamp-lg p-4 border-[#EEEEEE] border-2" />
                                </div>

                            </div>

                            <div>
                                <div className="grid my-14">
                                    <label htmlFor="celphone" className="clamp-md mb-1">Celphone</label>
                                    <input id="celphone" type="text" name="celphone" value="+506 87978797" className="form-input w-full h-[85px] rounded-[20px] text-black clamp-lg p-4 border-[#EEEEEE] border-2" />
                                </div>

                                <div className="grid my-14">
                                    <label htmlFor="status" className="clamp-md mb-1">Status</label>
                                    <input id="status" type="text" name="status" value="Active" className="form-input w-full h-[85px] rounded-[20px] text-black clamp-lg p-4 border-[#EEEEEE] border-2" />
                                </div>
                            </div>
                        </div>


                        <div className="bg-[#212121] mt-[38px] p-[38px] rounded-[20px]">
                            <h3 className="clamp-xl font-medium text-[#6BDD8F]">Health Condition</h3>
                            <div className="grid grid-cols-2 gap-8 text-white">
                                <div>
                                    <div className="grid my-14">
                                        <label htmlFor="age" className="clamp-md mb-1">Age</label>
                                        <input id="age" type="text" name="age" value="20 years old" className="form-input w-full h-[85px] rounded-[20px] text-black clamp-lg p-4 border-[#EEEEEE] border-2" />
                                    </div>

                                    <div className="grid my-14">
                                        <label htmlFor="sleepHours" className="clamp-md mb-1">Daily sleep hours</label>
                                        <input id="sleepHours" type="text" name="sleepHours" value="8 hours" className="form-input w-full h-[85px] rounded-[20px] text-black clamp-lg p-4 border-[#EEEEEE] border-2" />
                                    </div>

                                </div>

                                <div>
                                    
                                    <div className="grid my-14">
                                        <label htmlFor="physicalActivities" className="clamp-md mb-1">Physical activities</label>
                                        <input id="physicalActivities" type="physicalActivities" name="physicalActivities" value="Joggin, calisthenics" className="form-input w-full h-[85px] rounded-[20px] text-black clamp-lg p-4 border-[#EEEEEE] border-2" />
                                    </div>

                                    <div className="grid my-14">
                                        <label htmlFor="desease" className="clamp-md mb-1">Desease(s)</label>
                                        <input id="desease" type="desease" name="desease" value="Chlamydia, E. Coli" className="form-input w-full h-[85px] rounded-[20px] text-black clamp-lg p-4 border-[#EEEEEE] border-2" />
                                    </div>

                                </div>
                            </div>

                            <div className="flex justify-center items-center p-4">
                                <input type="submit" value="Update Condition" className="bg-[#6BDD8F] clamp-lg text-white py-4 px-4 rounded-[20px] w-[598px]" />
                            </div>
                        </div>
                    </section>
                    </form>
                </section>   
            </section>
    </section>
    )
}