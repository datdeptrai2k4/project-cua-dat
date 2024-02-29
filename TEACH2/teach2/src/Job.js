import { useState } from "react";

function Job({ index, item, handleDelete, blah, job, setJob }) {
  const [graphColor, setGraphColor] = useState("");

  const handleDone = () => {
    setGraphColor("red");
  };

  const handleEdit = (index) => {
    const value = blah.current;
    if (typeof value === "object" || value === null) return;
    const jobList = [...job];
    jobList[index] = value;
    setJob(jobList);
  };

  return (
    <li className="jobs" style={{ color: graphColor }}>
      <p>{item}</p>
      <div className={"button-container"}>
        <button onClick={() => handleEdit(index)}>Edit</button>
        <button onClick={() => handleDone()}>Done</button>
        <button className="delete-button" onClick={() => handleDelete(index)}>
          X
        </button>
      </div>
    </li>
  );
}

export default Job;
