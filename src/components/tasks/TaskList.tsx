import { Task } from "../../interfaces/Task.interface";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Task[];
  deleteTask: (id: number) => void;
  editTask: (task: Task) => void;
}

export default function TaskList({ tasks, editTask, deleteTask }: Props) {
  return (
    <>
      {tasks.map((task) => (
        <div className="col-md-6 col-lg-4 pb-2" key={task.id}>
            <TaskCard task={task} editTask={editTask} deleteTask={deleteTask}/>
        </div>
      ))}
    </>
  );
}