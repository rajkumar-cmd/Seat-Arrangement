import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Style from './App.module.css';

function App() {
  const [num, setnum] = useState()
  const [data, setdata] = useState([])
  const [seats, setSeats] = useState(0)
  
  return (
    <div className="App">
      <div id={Style.container}>
        {data && data.map((el) => (
          <div style={{ backgroundColor: el.availability ? "red" : "green" }} key={el.seatNo}>{el.seatNo}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
