import "./App.css";
import Tasks from "./components/tasks/Tasks";
import Toolbar from "./components/Toolbar";

interface Props {
  title?: string;
}

export function App({ title }: Props) {
  return (
    <div className="main bg-dark text-white">
      <Toolbar title={title} />
      <Tasks />
    </div>
  );
}
