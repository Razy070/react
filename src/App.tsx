import "./App.css";
import axios from "axios";
import React from "react";


function ReadOne() {
  function GetData() {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => alert(response.data))
      .catch((error) => console.log(error));
  }

  return (
    <div>
      {/* ReadOne */}
      <button onClick={GetData} className="btn btn-lg btn-primary">
        get data
      </button>
    </div>
  );
}


export default ReadOne;
