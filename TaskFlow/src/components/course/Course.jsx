import "../../index.css";

export function Course({ name, description, image }) {
    return (


        <section className="bg-white rounded-lg border border-[#E0E0E0] w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto gap-4 mt-4 ">
            <div>
                <img className="w-full h-full rounded-t-lg" src={image} alt="#" />
            </div>
            <div className="p-8">
                <div >
                    <h2 className="clamp-xl font-bold mt-4 mb-4">{name}</h2>
                </div>
                <div className="mt-6">
                    <h3 className="clamp-md font-bold">Description</h3>
                    <p className="clamp-md">{description}</p>
                </div>
                <div className="flex items-center justify-center my-6">
                    <a className="text-center bg-[#6BDD8F] hover:bg-green-600 text-white py-4 px-4 rounded-2xl w-full" href="#">View More</a>
                </div>
            </div>
        </section>

    );
}


