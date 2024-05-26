import React, { useRef } from 'react';
import { TaskCard } from './TaskCard.jsx';
import { tasks } from './DataTasks.jsx';

export function Carousel() {
    const scrollRef = useRef();

    const handleScroll = (direction) => {
        const container = scrollRef.current;
        const scrollAmount = 200;
        if (direction === 'left') {
            container.scrollLeft -= scrollAmount;
        } else {
            container.scrollLeft += scrollAmount;
        }
    };

    return (
        <div className="flex overflow-y-hidden p-[2rem] gap-[2vw] cursor-pointer overflow-x-hidden w-full" ref={scrollRef}>
            {tasks.map(task => (
                <TaskCard
                    key={task.id}
                    bgColor={task.bgColor}
                    number={task.number}
                    title={task.title}
                    course={task.course}
                    dueDate={task.dueDate}
                />
            ))}

            <button
                className="absolute top-1/2 transform -translate-y-1/2 left-100 bg-white bg-opacity-25 hover:bg-opacity-85 rounded-full p-4"
                onClick={() => handleScroll('left')}
            >
                &lt;
            </button>
            <button
                className="absolute top-1/2 transform -translate-y-1/2 right-20 bg-white bg-opacity-25 hover:bg-opacity-85 rounded-full p-4"
                onClick={() => handleScroll('right')}
            >
                &gt;
            </button>


        </div>
    );
}


