import { ToastContainer } from "react-toastify";
import "./App.scss";
import Routing from "./routes/Routing";

export function App() {
  return (
    <div className="bg-dark text-white">
      <Routing />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
