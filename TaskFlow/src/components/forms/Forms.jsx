import "../../index.css";

export function Forms() {
    return (
    
        <section className='grid grid-cols-2 gap-6 '>
            <section className="mt-8">
                <div className="bg-white rounded-lg border border-[#979797] p-8 w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
                    <section className="mb-4">
                        <h3 className="clamp-xxl text-center mb-4">Login</h3>
                        <form method="post" action="#">
                            <div className="flex my-14">
                                <label htmlFor="username" className="clamp-md mb-1">Username:</label>
                                <input id="username" type="text" name="username" className="form-input border-b-2 border-black w-full" />
                            </div>
                            <div className="flex my-14">
                                <label htmlFor="password" className="mb-1 clamp-md">Password:</label>
                                <input id="password" type="password" name="password" className="form-input border-b-2 border-black w-full" />
                            </div>
                            <div className="flex justify-center my-8">
                                <a href="#" className="clamp-sm text-center text-[#6BDD8F] hover:text-green-600">Forgot Password?</a>
                            </div>
                            <div className="mb-4">
                                <input type="submit" value="LOGIN" className="bg-[#0E0E0E] hover:bg-green-600 text-white py-4 px-4 rounded-md w-full" />
                            </div>
                            <p className="clamp-sm mt-8 text-center">
                                Don’t have an account? <a href="register.php" className="text-[#6BDD8F] hover:text-green-600">Sign in</a>
                            </p>
                        </form>
                    </section>
                </div>
            </section>

            <section className="my-8">
                <div className="bg-white rounded-lg border border-[#979797] p-8 w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
                    <section className="mb-4">
                        <h3 className="clamp-xxl text-center mb-4">Sign in</h3>
                        <form method="post" action="#">
                            <div className="flex my-14">
                                <label htmlFor="username" className="clamp-md mb-1">Username:</label>
                                <input id="username" type="text" name="username" className="form-input border-b-2 border-black w-full" />
                            </div>
                            <div className="flex my-14">
                                <label htmlFor="password" className="mb-1 clamp-md">Password:</label>
                                <input id="password" type="password" name="password" className="form-input border-b-2 border-black w-full" />
                            </div>
                            <div className="flex my-14">
                                <label htmlFor="emailAddress" className="mb-1 clamp-md">Email Address:</label>
                                <input id="emailAddress" type="email" name="emailAddress" className="form-input border-b-2 border-black w-full" />
                            </div>
                            <div className="flex my-14">
                                <label htmlFor="fullname" className="mb-1 clamp-md">FullName:</label>
                                <input id="fullname" type="text" name="fullname" className="form-input border-b-2 border-black w-full" />
                            </div>
                           
                            <div className="mb-4">
                                <input type="submit" value="LOGIN" className="bg-[#0E0E0E] hover:bg-green-600 text-white py-4 px-4 rounded-md w-full" />
                            </div>
                            <p className="clamp-sm mt-8 text-center">
                            Already have an account? <a href="register.php" className="text-[#6BDD8F] hover:text-green-600">Log in</a>
                            </p>
                        </form>
                    </section>
                </div>
            </section>
        </section>

        
      

    )
}
