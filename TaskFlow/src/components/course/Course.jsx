import "../../index.css";

export function Course(courseName, description, image) {
    return (
        <section className="form-mt-8 mt-40">
            <div className="mt-8 ml-4 sm:ml-10 gap-x-4">
                <h1 className="clamp-xxl text-start mb-text">My courses</h1>
            </div>
            <div className="grid grid-cols-2 form-grid-cols-2">
                <section className="bg-white rounded-lg border border-[#E0E0E0] w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto gap-4 mt-8 mb-8">
                    <div>
                    <img className="w-full h-full rounded-t-lg" src="https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png" alt="#" />
                    </div>
                    <div className="p-8">
                    <div >
                        <h2 className="clamp-xl font-bold mt-8 mb-8">TM5300- English Reading for Computer Science</h2>
                    </div>
                    <div className="mt-6">
                        <h3 className="clamp-md font-bold">Description</h3>
                        <p className="clamp-md">The course is focused on the development of interactive applications using an object-oriented programming language, incorporating the utilization of n-tier architecture within the development of interactive web applications. Students must develop a final project, where a web-oriented application is created using the knowledge acquired in the course and in previous courses.</p>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <a className="text-center bg-[#6BDD8F] hover:bg-green-600 text-white py-4 px-4 rounded-2xl w-full" href="#">View More</a>
                    </div>
                    </div>
                </section>
            </div>
        </section>
    );
}


