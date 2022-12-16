import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);

  const onClickBtn = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }

    setToDos((prev) => [toDo, ...prev]);
    setToDo("");
  };
  useEffect(() => {
    console.log("컴포넌트 마운트", toDos);
    return console.log("컴포넌트 언마운트");
  }, [toDos]);
  return (
    <div>
      <h1>To do list : {toDos.length}</h1>
      <form>
        <input
          text="text"
          placeholder="Write your to do..."
          onChange={onChange}
          value={toDo}
        />
        <button onClick={onClickBtn}>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {index}, {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
