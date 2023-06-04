import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { TwitterPicker } from "react-color";
import reactCSS from "reactcss";
import { Task } from "../../interfaces/Task.interface";

interface Props {
  task: Task;
  setEditedTask: (task: Task) => void;
}

export default function ColorSelector({ task, setEditedTask }: Props) {
  const [state, setState] = useState({
    displayColorPicker: false,
    color: [task.color],
  });

  const colors = [
    "#ffffff",
    "#f28b82",
    "#fbbc04",
    "#fff475",
    "#ccff90",
    "#a7ffeb",
    "#cbf0f8",
    "#aecbfa",
    "#d7aefb",
    "#fdcfe8",
    "#e6c9a8",
    "#e8eaed"
  ];
  
  const styles: any = reactCSS({
    default: {
      color: {
        color: state.color,
      },
      popover: {
        position: "absolute",
        zIndex: "2",
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
    },
  });

  const handleClick = () => {
    setState({ ...state, displayColorPicker: !state.displayColorPicker });
  };

  const handleClose = () => {
    setState({ ...state, displayColorPicker: false });
  };

  const handleChange = (color: any) => {
    setState({ ...state, color: color.hex });
    setEditedTask({ ...task, color: color.hex });
  };

  return (
    <div>
      <button className="btn btn-secondary circle-button" onClick={handleClick}>
        <FontAwesomeIcon icon={faPalette} />
      </button>

      {state.displayColorPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <TwitterPicker colors={colors} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
}
