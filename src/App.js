import "./App.css";
import JSONDATA from "./MOCK_DATA.json";
import { useState } from "react";

function App() {
  const [searchTerm, setsearchTerm] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setsearchTerm(e.target.value) ;
        }}
      />
      {JSONDATA.filter((value) => {
        if (searchTerm == "") {
          return value;
        } else if (
          value.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return value;
        }
      }).map((value, key) => {
        return (
          <div className="user" key={key}>
            <p> {value.first_name} </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
