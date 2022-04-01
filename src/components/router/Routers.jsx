import {
  Routes,
  Route
} from "react-router-dom";

import Home from '../home/Home';
import Project from "../project/Project";
import Course from "../course/Course"
import ProjectsDetail from "../project/ProjectsDetail";
import CoursesDetail from "../course/CoursesDetail";
import Student from "../student/Student";

export default function Routers() {
  
  return (
  
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/project" element={<Project/>} />
      <Route exact path="/course" element={<Course/>} />
      <Route exact path="/projects-detail" element={<ProjectsDetail/>} />
      <Route exact path="/courses-detail" element={<CoursesDetail/>} />
      <Route exact path="/student" element={<Student/>} />
    </Routes>
  )
}