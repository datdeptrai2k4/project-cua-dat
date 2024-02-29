import Job from "./Job";
import "./App.css";
import { useState, useRef, useEffect } from "react";

// js, jsx

// js: javascript,
// jsx: javascript extension: bản mở rộng của javascript
// jsx: cho phép viết html bên trong file đuôi .js (file của jaavascript)

// declarative: làm rõ
// imperative: ra lệnh

//VD: làm một cái hamburger

//impartive: vnil jvascript
//Ra lệnh: tao muốn cái hamburger -> là có hamburger
//remove Child (vanila javscript)

//declarative: reactjs
//Cắt bánh mì ra làm đôi, rau củ quả, nướng thịt, blah blah

//Cooking, Eating, Drinking, Washing

//filter, map, forEach

//filter: lọc

function App() {
  const blah = useRef("");
  const [job, setJob] = useState(["Cooking", "Eating", "Drinking", "Washing"]);

  const handleDelete = (index) => {
    const subJob = job.filter((item, index_2) => index_2 !== index); // nhận true, bỏ false
    setJob(subJob);
  };

  const handleAdd = () => {
    const value = blah.current;
    if (typeof value === "object" || value === null) return;
    const newList = [...job, value];
    setJob(newList);
  };

  return (
    <main className="container">
      <h1 className="title">To-do List:</h1>
      <ul className="list-container">
        {job.map((item, index) => (
          <Job
            key={index}
            item={item}
            handleDelete={handleDelete}
            index={index}
            blah={blah}
            job={job}
            setJob={setJob}
            // handleEdit={handleEdit}
          />
        ))}
        <input
          type="text"
          placeholder="Type in your job"
          ref={blah}
          onChange={(e) => (blah.current = e.target.value)}
        />
        <button onClick={() => handleAdd()}>Add</button>
      </ul>
    </main>
  );
}

export default App;
