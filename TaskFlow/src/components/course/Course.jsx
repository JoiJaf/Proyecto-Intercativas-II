import "../../index.css";

export function Course() {
    return (
        <div >
            <div className="mt-8 ml-10 gap-x-4">
                <h1 className="clamp-xxl text-start">My courses</h1>
            </div>
            <div className="grid grid-cols-2 ">

                <section className="bg-white rounded-lg border border-gray-600 p-8 w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto gap-4 mt-8 mb-8">
                    <div className="recipe">
                        <div className="flex relative py-0 px-4">
                            <img class="recipe-image" src="https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png" alt="#" />
                        </div>

                        <div>
                            <h2 className="clamp-xl font-bold mt-8 mb-8">TM5300- English Reading for Computer Science</h2>
                            <ul className="clamp-md font-bold list-none">
                                <li className="mt-2">Mode: Presential</li>
                                <li className="mt-2">Classroom: N01</li>
                                <li className="mt-2">Professor: Jorge Miranda Loria</li>
                            </ul>
                        </div>

                        <div className="mt-6">
                            <h3 className="clamp-md font-bold">Description</h3>
                            <p className="clamp-md">The course is focused on the development of interactive
                                applications using an object-oriented programming language,
                                incorporating the utilization of n-tier architecture within
                                the development of interactive web applications. Students must
                                develop a final project, where a web-oriented application is
                                created using the knowledge acquired in the course and in previous
                                courses.
                            </p>
                        </div>


                        <div className="flex items-center justify-center flex-col sm:flex-row">
                            <h3 className="clamp-lg font-bold mt-10 mb-10 mr-4">Schedule</h3>
                            <ul className="flex gap-1.5 justify-center">
                                <li className="clamp-sm p-2 rounded-full bg-black text-white hover:bg-green-600">SUN</li>
                                <li className="clamp-sm p-2 rounded-full bg-black text-white hover:bg-green-600">MON</li>
                                <li className="clamp-sm p-2 rounded-full bg-black text-white hover:bg-green-600">TUE</li>
                                <li className="clamp-sm p-2 rounded-full bg-black text-white hover:bg-green-600">WED</li>
                                <li className="clamp-sm p-2 rounded-full bg-black text-white hover:bg-green-600">THU</li>
                                <li className="clamp-sm p-2 rounded-full bg-black text-white hover:bg-green-600">FRI</li>
                                <li className="clamp-sm p-2 rounded-full bg-black text-white hover:bg-green-600">SAT</li>
                            </ul>
                        </div>



                        <div className="flex items-center justify-center mt-4">
                            <a className="text-center bg-[#6BDD8F] hover:bg-green-600 text-white py-4 px-4 rounded-md w-full" href="#">View More</a>
                        </div>
                    </div>
                </section>

                <section className="bg-white rounded-lg border border-gray-600 p-8 w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto gap-4 mt-8 mb-8">
                    <div className="recipe">
                        <div className="flex relative py-0 px-4">
                            <img class="recipe-image" src="https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png" alt="#" />
                        </div>

                        <div>
                            <h2 className="clamp-xl font-bold mt-8 mb-8">TM5300- English Reading for Computer Science</h2>
                            <ul className="clamp-md font-bold list-none">
                                <li className="mt-2">Mode: Presential</li>
                                <li className="mt-2">Classroom: N01</li>
                                <li className="mt-2">Professor: Jorge Miranda Loria</li>
                            </ul>
                        </div>

                        <div className="mt-6">
                            <h3 className="clamp-md font-bold">Description</h3>
                            <p className="clamp-md">The course is focused on the development of interactive
                                applications using an object-oriented programming language,
                                incorporating the utilization of n-tier architecture within
                                the development of interactive web applications. Students must
                                develop a final project, where a web-oriented application is
                                created using the knowledge acquired in the course and in previous
                                courses.
                            </p>
                        </div>


                        <div className="flex items-center justify-center flex-col sm:flex-row">
                            <h3 className="clamp-lg font-bold mt-10 mb-10 mr-4">Schedule</h3>
                            <ul className="flex gap-1.5 justify-center">
                                <li className="clamp-sm p-2 rounded-full bg-black text-white hover:bg-green-600">SUN</li>
                                <li className="clamp-sm p-2 rounded-full bg-black text-white hover:bg-green-600">MON</li>
                                <li className="clamp-sm p-2 rounded-full bg-black text-white hover:bg-green-600">TUE</li>
                                <li className="clamp-sm p-2 rounded-full bg-black text-white hover:bg-green-600">WED</li>
                                <li className="clamp-sm p-2 rounded-full bg-black text-white hover:bg-green-600">THU</li>
                                <li className="clamp-sm p-2 rounded-full bg-black text-white hover:bg-green-600">FRI</li>
                                <li className="clamp-sm p-2 rounded-full bg-black text-white hover:bg-green-600">SAT</li>
                            </ul>
                        </div>



                        <div className="flex items-center justify-center mt-4">
                            <a className="text-center bg-[#6BDD8F] hover:bg-green-600 text-white py-4 px-4 rounded-md w-full" href="#">View More</a>
                        </div>
                    </div>
                </section>


            </div>
        </div>




    );
}

