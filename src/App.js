import { useState } from "react";
import "./App.css";
import PrintMyName from "./component/PrintMyName";
import axios from "axios";
function App() {
  axios.defaults.baseURL = "http://192.168.0.14:5000";
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const getUsers = async () => {
    const { data } = await axios.get("/user");
    setUsers(data);
  };
  const postUsers = async () => {
    const { status } = await axios.post("/user", { name });
    if (status === 200) {
      alert("ok");
      setName("");
    } else {
      alert("err");
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getUsers}>getUsers</button>
        <button onClick={postUsers}>postUsers</button>
        <input onChange={(e) => setName(e.target.value)} value={name}></input>
        {users.map((el) => (
          <PrintMyName name={el.name}></PrintMyName>
        ))}
      </header>
    </div>
  );
}
export default App;