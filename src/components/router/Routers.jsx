import {
  Routes,
  Route
} from "react-router-dom";

import Home from '../home/Home';
import Project from "../project/Project";
import ProjectsDetail from "../project/ProjectsDetail";

export default function Routers() {
  
  return (
  
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/project" element={<Project/>} />
      <Route exact path="/projects-detail" element={<ProjectsDetail/>} />
    </Routes>
  )
}