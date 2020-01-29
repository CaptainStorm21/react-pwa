import React, { useState, useEffect} from 'react';
import './App.css';

function App() {
  const [data, setData] =useState ([])

  //data fetching
  useEffect (() => {
    const fetchData = async() =>{
      const result = await fetch ("http://orangevalleycaa.org/api/videos").then (
        response => response.json()
      )
      setData(result);
    }
    fetchData();
  }, []);
  //square brakets stop the re-rendering
  return (
    <div className="App">
      <header>
        <h1> Videos </h1>      
      </header>
      <div className="container col-lg-6">
        {data.map( video =>(
          <div className="card col ">
           <div className="card-body ">
            <h5> { video.name } </h5>
            <video height={ 200 } controls src = { video.video_url } />
          </div>
          </div>
        ))}
 </div>
    </div>
  );
}

export default App;
