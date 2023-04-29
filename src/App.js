import React, { useState } from "react";

const UserInfo = [{ id: "", username: "", age: "" }];

function App() {
  const [data, setData] = useState(UserInfo);
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const newData = {
      username: enteredName,
      age: +enteredAge,
      id: Math.random(),
    };

    setData(newData, ...data);
    setEnteredName("");
    setEnteredAge("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>Username</div>
        <input type="text" value={enteredName} onChange={nameChangeHandler} />
        <div>Age(Years)</div>
        <input type="number" value={enteredAge} onChange={ageChangeHandler} />
      </form>
      <button type="submit">Add User</button>
    </div>
  );
}

export default App;
