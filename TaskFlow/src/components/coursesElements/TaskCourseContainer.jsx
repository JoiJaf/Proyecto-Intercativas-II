
import "../../index.css";

import { TaskCourse } from "./TaskCourse";

export function TaskCourseContainer({ items }) {

    return (
        <>
            <section className=" flex flex-col space-y-2">
                {/* Aquí se repite el bloque para cada elemento */}
                {items.map(item => <TaskCourse
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    date={item.date}
                    image={item.image} />)}

                {/* Fin */}
            </section>
        </>

    );
}