import { useState, useEffect } from "react";
import CardProject from "../cards/CardProject";
import Label from "../label/Label";
import axios from "axios";

const baseUrl = "https://api-ufg-impacto.herokuapp.com/api/indicator/project-type";

export default function ProjectsDetail() {

  const [projects, setProjects] = useState({
    Ensino: [],
    Pesquisa: [],
    Extensão: [],
  });

  useEffect(() => {
    axios
      .get(baseUrl, {
        headers: {
          "Content-Type": "application/json",
          // 'Access-Control-Allow-Origin': '*'
        },
      })
      .then((response) => {
        setProjects(response.data);
      });
  }, []);

  function renderEducationCards() {
    return projects["Ensino"].map((project, index) => (
        <div className="col-sm-3">
              <CardProject
                title={
                  project.title[0].toUpperCase() +
                  project.title.toLowerCase().slice(1)
                }
                description={project.summary}
                academicUnit={project.academicUnitName}
                idModal={project.id}
              /> 
        </div>
      
    ));
  }

  function renderResearchCards() {
    return projects["Pesquisa"].map((project) => (
      <div className="col-sm-3">
        <CardProject
          title={
            project.title[0].toUpperCase() +
            project.title.toLowerCase().slice(1)
          }
          description={project.summary}
          academicUnit={project.academicUnitName}
          id={project.id}
        />
      </div>
    ));
  }

  function renderExtensionCards() {
    return projects["Extensão"].map((project) => (
      <div className="col-sm-3">
        <CardProject
          title={
            project.title[0].toUpperCase() +
            project.title.toLowerCase().slice(1)
          }
          description={project.summary}
          academicUnit={project.academicUnitName}
          id={project.id}
        />
      </div>
    ));
  }

  return (
    <div className="container-fluid" style={{ marginTop: "1%" }}>
      <Label title={"Projetos"} subtitle={"detalhes"} />
      <p
        className="text-center fs-4 text-uppercase fw-bold"
        style={{ color: "#0D3E5F" }}
      >
        ensino
      </p>
      <div className="row d-flex justify-content-start container-fluid">
          {renderEducationCards()}
    </div>

      <p
        className="text-center fs-4 text-uppercase fw-bold mt-4"
        style={{ color: "#0D3E5F" }}
      >
        pesquisa
      </p>
      <div className="row d-flex justify-content-start container-fluid">
        {renderResearchCards()}
      </div>
      <p
        className="text-center fs-4 text-uppercase fw-bold mt-4"
        style={{ color: "#0D3E5F" }}
      >
        extensão
      </p>
      <div className="row d-flex justify-content-start container-fluid">
        {renderExtensionCards()}
      </div>
    </div>
  );
}
