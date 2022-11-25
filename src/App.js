import logo from "./logo.svg";
import "./App.css";
import PrintMyName from "./component/PrintMyName";
import axios from "axios";
import { useState } from "react";
function App() {
  axios.defaults.baseURL = "http://192.168.0.14:5000";
  const [users, setUsers] = useState([]);
  const getUsers = async() => {
    const {data} = await axios.get("/user")
    setUsers(data);
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getUsers}>getUsers</button>
        {users.map((el) => (
          <PrintMyName name={el.name}></PrintMyName>
        ))}
      </header>
    </div>
  );
}
export default App;