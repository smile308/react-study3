import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const nameChangeHandler = () => {
    setName();
  };
  return (
    <div>
      <form>
        <div>Username</div>
        <input type="text" onChange={nameChangeHandler} />
        <div>Age(Years)</div>
        <input type="number" />
      </form>
      <button type="submit">Add User</button>
    </div>
  );
}

export default App;
