import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";

import Home from '../home/Home'

export default function Routers() {
  
  return (
    <div className="container-fluid">
    <Routes>
      <Route exact path="/" element={<Home/>} />
    </Routes>
    </div>

  )
}