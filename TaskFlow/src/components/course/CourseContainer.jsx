import "../../index.css";

import { Course } from "./Course";

export function CourseContainer({ items }) {


    return (
        <>
                <div className="mt-8 ml-4 sm:ml-10 gap-x-4 ">
                    <h1 className=" clamp-xxl text-start sm:text-center mb-text">My courses</h1>
                </div>
                <div className="grid grid-cols-3 gap-4 my-5 form-grid-cols-2 px-4">
                    {items.map(item => <Course key={item.id}
                        name={item.name}
                        description={item.description}
                        image={item.image} />)}
                </div>
        </>

    );
}