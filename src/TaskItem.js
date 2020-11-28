import React from "react";
import { db } from "./firebase";
import ClearIcon from "@material-ui/icons/Clear";
const TaskItem = ({ id, title, contents }) => {
  const DeleteInputData = () => {
    db.collection("group").doc(id).delete();
  };
  return (
    <div key={id}>
      <h2>{title}</h2>
      <h3>{contents}</h3>
      <button onClick={DeleteInputData}>
        <ClearIcon />
      </button>
    </div>
  );
};
export default TaskItem;