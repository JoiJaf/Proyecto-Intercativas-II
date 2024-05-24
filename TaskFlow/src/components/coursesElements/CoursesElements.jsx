
import taskImg from '../../assets/img/task-image.png';
import "../../index.css";
import { TaskCourseContainer } from "./TaskCourseContainer";

export function CoursesElements() {
    const tasks = [
        { 
            "id": 1, 
            "image": "https://biblioteca.acropolis.org/wp-content/uploads/2019/07/Rosa-Mister_Lincoln.jpg",
            "title": "UI/UX", 
            "category": "Title", 
            "estimatedTime": "Time"  
        },
        { 
            "id": 2, 
            "image": "https://biblioteca.acropolis.org/wp-content/uploads/2019/07/Rosa-Mister_Lincoln.jpg",
            "title": "UI/UX", 
            "category": "Title", 
            "estimatedTime": "Time"  
        },
        { 
            "id": 3, 
            "image": "https://biblioteca.acropolis.org/wp-content/uploads/2019/07/Rosa-Mister_Lincoln.jpg",
            "title": "UI/UX", 
            "category": "Title", 
            "estimatedTime": "Time"  
        },
        { 
            "id": 4, 
            "image": "https://biblioteca.acropolis.org/wp-content/uploads/2019/07/Rosa-Mister_Lincoln.jpg",
            "title": "UI/UX", 
            "category": "Title", 
            "estimatedTime": "Time"  
        },
        // Otros eventos...
    ];

    return (
        <section className=" mt-8 mb-40">
            <h1 className="clamp-xxl font-bold px-8">TM5300- English Reading for Computer Science</h1>
            <div className="mt-4 grid grid-cols-[35%_60%] justify-center mb-10 px-4 py-4 gap-6 form-grid-cols-2 form-mt-8">
                <section className="gap-15 border border-[#E0E0E0] rounded-[1rem] bg-[#0E0E0E] flex flex-col">
                    <div className="flex justify-start pl-4">
                        <h1 className="clamp-xl text-[#6BDD8F] font-bold">Statistics</h1>
                    </div>
                    <div className="grid p-[1rem] ">
                        <section className="mt-6">
                            <div>
                                <p className="text-[#CCCCCC] clamp-md">This section displays your progress in this course, including the number of tasks
                                    completed and the percentage completed.<br />tasks this week</p>
                            </div>
                            <div className="flex justify-center mt-7">
                                <h2 className="clamp-xxl font-bold text-[#CCCCCC]">2/10</h2>
                            </div>
                        </section>
                        <div className="flex justify-center mt-20 mb-10">
                            <div className="border-[.8rem] border-[#6BDD8F] p-[1rem] w-[8rem] rounded-[100%] ">
                                <h2 className="clamp-xxl font-bold pt-[.8rem] text-[#CCCCCC]">100%</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className=" bg-[#FCF8EC] gap-15 border border-[#E0E0E0] rounded-[1rem] overflow-y-auto max-h-[600px] flex flex-col">
                    <div className="flex justify-start pl-4">
                        <h1 className="clamp-xl font-bold text-gray-200">All the tasks</h1>
                    </div>
                    <div className="grid p-[1rem] flex-1">
                        <TaskCourseContainer items={tasks} />
                    </div>
                </section>
            </div>
        </section>
    );
}