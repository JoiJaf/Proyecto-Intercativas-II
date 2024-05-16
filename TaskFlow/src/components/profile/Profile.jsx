import "../../index.css";

export function Profile() {

    return (
        <section>
            <h2 className="mt-[10vw] ml-[38px] clamp-xxl">My profile</h2>
            <div class="flex justify-end mr-[38px]">
                <span id="editText" class="text-blue-500">Edit</span>
            </div>
            <section className="grid grid-cols-2 gap-[38px]"> 
            <section className="flex flex-wrap justify-center items-center border-[#EEEEEE] border-2 mb-[76px] mx-[38px] p-[38px] rounded-[20px]">                
                <div className="my-[38px] mx-[72px]">
                    <img className="w-[426px] h-[418px] rounded-full" src="../src/assets/img/profile.png" alt="profile" />
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="mt-[38px] clamp-xxl font-bold">María Segura Umaña</h1>
                    <p className="text-[#A7A7A7] clamp-md">mariaumasegur@example.com</p>
                    <h3 className="font-bold clamp-lg my-[72px]">Student</h3>
                </div>
            </section>


            <form method="post" action="#">
            <section className="border-[#EEEEEE] border-2 mb-[76px] mx-[38px] p-[38px] rounded-[20px]">
                <div className="grid grid-cols-2 gap-8 text-[#A7A7A7]">
                    <div>
                        <div className="grid my-14">
                            <label htmlFor="age" className="clamp-md mb-1">Age</label>
                            <input id="age" type="text" name="age" value="20 years old" className="form-input w-full h-[85px] rounded-[20px] text-black clamp-lg p-4 border-[#EEEEEE] border-2" />
                        </div>

                        <div className="grid my-14">
                            <label htmlFor="birthday" className="clamp-md mb-1">Birthday’s day</label>
                            <input id="birthday" type="text" name="age" value="01/04/02" className="form-input w-full h-[85px] rounded-[20px] text-black clamp-lg p-4 border-[#EEEEEE] border-2" />
                        </div>

                        <div className="grid my-14">
                            <label htmlFor="celphone" className="clamp-md mb-1">Celphone</label>
                            <input id="celphone" type="text" name="celphone" value="+506 87978797" className="form-input w-full h-[85px] rounded-[20px] text-black clamp-lg p-4 border-[#EEEEEE] border-2" />
                        </div>
                    </div>

                    <div>
                        <div className="grid my-14">
                            <label htmlFor="carnet" className="clamp-md mb-1">Carnet</label>
                            <input id="carnet" type="text" name="carnet" value="C13838" className="form-input w-full h-[85px] rounded-[20px] text-black clamp-lg p-4 border-[#EEEEEE] border-2" />
                        </div>

                        <div className="grid my-14">
                            <label htmlFor="career" className="clamp-md mb-1">Career</label>
                            <input id="career" type="text" name="career" value="ITM" className="form-input w-full h-[85px] rounded-[20px] text-black clamp-lg p-4 border-[#EEEEEE] border-2" />
                        </div>

                        <div className="grid my-14">
                            <label htmlFor="hobbies" className="clamp-md mb-1">Hobbies</label>
                            <input id="hobbies" type="text" name="hobbies" value="Art and music" className="form-input w-full h-[85px] rounded-[20px] text-black clamp-lg p-4 border-[#EEEEEE] border-2" />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="grid grid-cols-2 gap-8 text-[#A7A7A7]">
                        <div className="grid my-14">
                            <label htmlFor="registration" className="clamp-md mb-1">Date of registration</label>
                            <input id="registration" type="text" name="registration" value="May 10th, 2023" className="form-input w-full h-[85px] rounded-[20px] text-black clamp-lg p-4 border-[#EEEEEE] border-2" />
                        </div>  

                        <div className="grid my-14">
                            <label htmlFor="status" className="clamp-md mb-1">Status</label>
                            <input id="status" type="text" name="status" value="Active" className="form-input w-full h-[85px] rounded-[20px] text-black clamp-lg p-4 border-[#EEEEEE] border-2" />
                        </div>
                    </div>
                </div>
            </section>
            </form>
        </section>
    </section>
    )
}