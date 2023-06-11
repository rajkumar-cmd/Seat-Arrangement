import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Style from './App.module.css';

function App() {
  const [number, setnumber] = useState()
  const [data, setdata] = useState([])

  const handleSubmit = async () => {
    try {
      let res = await axios.post(`https://dull-puce-starfish-tie.cyclic.app/`, { number: number })
      console.log(res.data)
      alert(res.data.position)
    }
    catch (err) {
      console.log(err)
      alert("Error Occured")
    }
  }
  
  useEffect(() => {
    const getData = async () => {
      let result = await axios.get(`https://dull-puce-starfish-tie.cyclic.app/`)
      setdata(result.data)
    }
    getData()
  }, [number])

  const handleValue=(e)=>{
    setnumber(e.target.value);
  }

  return (
    <div style={{margin:"2rem 0rem"}}>
      <div style={{textAlign:"center",margin:"2rem 0rem"}}>
        <input type="text" onChange={handleValue}/>
        <button onClick={handleSubmit}>Book</button>
      </div>
      <div id={Style.container}>
        {data && data.map((el) => (
          <div style={{ backgroundColor: el.empty ? "red" : "green" }} key={el.seatNo}>{el.seatPos + 1}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
