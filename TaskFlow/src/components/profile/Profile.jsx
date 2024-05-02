import "../../index.css";

export function Profile() {

    return (
        <section>
            <h2>My profile</h2>
            <section>                
                <div>
                    <img src="../src/assets/img/profile.png" alt="profile" />
                </div>
                <h1>María Segura Umaña</h1>
                <p>mariaumasegur@example.com</p>
                <h3>Student</h3>
            </section>

            <section>
                <form method="post" action="#">

                <div class="flex items-center">
                    <span id="editText" class="text-blue-500">Edit</span>
                </div>
                
                <div>
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
                    <div>

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
                </form>

            </section>
        </section>
    )
}