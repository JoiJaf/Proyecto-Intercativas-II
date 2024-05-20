import "../../index.css";
import { TaskCard } from './TaskCard.jsx';
import { tasks } from './DataTasks.jsx';

export function Carousel() {
  return (
    <div className="flex gap-[2vw] cursor-pointer overflow-x-hidden w-full">
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
    </div>
    )
  }
