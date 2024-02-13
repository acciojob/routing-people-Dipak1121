
import React from "react";
import './../styles/App.css';
import { Routes, Route } from "react-router-dom";
import data from "../Data/data";

import Users from "./Users";
import Info from "./Info";

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Users/>} />
          {
            data.map((item, index)=>{
              return(
                <Route key={index} path={`/${item.username}`} element={<Info item={item}/>} />
              )
            })
          }
        </Routes>
        
    </div>
  )
}

export default App
