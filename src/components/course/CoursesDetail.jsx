import { useState, useEffect } from "react";
import CardCourse from "../cards/CardCourse";
import Label from "../label/Label";
import axios from "axios";

const baseUrl = "https://api-ufg-impacto.herokuapp.com/api/indicator/courses-campus";

export default function CoursesDetail() {

  const [courses, setCourses] = useState({
    68700504: [{}],
    68700505: [{}],
    68700506: [{}],
    68700500: [{}],
    68700501: [{}],
    68700502: [{}],
    68700503: [{}]
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
        console.log(response.data)
        setCourses(response.data);
      });
  }, [courses]);

  function renderCidadeGoiasCards() {
    console.log(`${Object.keys(courses)} courses`)
    return courses["68700504"].map((course, index) => (
        <div className="col-sm-3">
              <CardCourse
                title={course.name}
                modality={course.modality}
                city={course.city}
                campus={course.campus}
                academicUnit={course.academicUnitName}
                idModal={course.id}
              /> 
        </div>
      
    ));
  }

  function renderCatalaoCards() {
    return courses["68700505"].map((course, index) => (
        <div className="col-sm-3">
              <CardCourse
                title={course.name}
                modality={course.modality}
                city={course.city}
                campus={course.campus}
                academicUnit={course.academicUnitName}
                idModal={course.id}
              /> 
        </div>
      
    ));
  }

  function renderSamambaiaCards() {
    return courses["68700506"].map((course, index) => (
        <div className="col-sm-3">
              <CardCourse
                title={course.name}
                modality={course.modality}
                city={course.city}
                campus={course.campus}
                academicUnit={course.academicUnitName}
                idModal={course.id}
              /> 
        </div>
      
    ));
  }

  function renderProfColemarNatalESilvaCards() {
    return courses["68700500"].map((course, index) => (
        <div className="col-sm-3">
              <CardCourse
                title={course.name}
                modality={course.modality}
                city={course.city}
                campus={course.campus}
                academicUnit={course.academicUnitName}
                idModal={course.id}
              /> 
        </div>
      
    ));
  }

  function renderAparecidaDeGoianiaCards() {
    return courses["68700501"].map((course, index) => (
        <div className="col-sm-3">
              <CardCourse
                title={course.name}
                modality={course.modality}
                city={course.city}
                campus={course.campus}
                academicUnit={course.academicUnitName}
                idModal={course.id}
              /> 
        </div>
      
    ));
  }

  function renderJatobaCards() {
    return courses["68700502"].map((course, index) => (
        <div className="col-sm-3">
              <CardCourse
                title={course.name}
                modality={course.modality}
                city={course.city}
                campus={course.campus}
                academicUnit={course.academicUnitName}
                idModal={course.id}
              /> 
        </div>
      
    ));
  }

  function renderRialmaCards() {
    return courses["68700503"].map((course, index) => (
        <div className="col-sm-3">
              <CardCourse
                title={course.name}
                modality={course.modality}
                city={course.city}
                campus={course.campus}
                academicUnit={course.academicUnitName}
                idModal={course.id}
              /> 
        </div>
      
    ));
  }

  return (
    <div className="container-fluid" style={{ marginTop: "1%" }}>
      <Label title={"Cursos"} subtitle={"detalhes"} />
      <p
        className="text-center fs-4 text-uppercase fw-bold mt-4"
        style={{ color: "#0D3E5F" }}
      >
        Samambaia
      </p>
      <div className="row d-flex justify-content-start container-fluid">
        {renderSamambaiaCards()}
      </div>
      <p
        className="text-center fs-4 text-uppercase fw-bold"
        style={{ color: "#0D3E5F" }}
      >
        Cidade de Goiás
      </p>
      <div className="row d-flex justify-content-start container-fluid">
          {renderCidadeGoiasCards()}
    </div>

      <p
        className="text-center fs-4 text-uppercase fw-bold mt-4"
        style={{ color: "#0D3E5F" }}
      >
        Catalão
      </p>
      <div className="row d-flex justify-content-start container-fluid">
        {renderCatalaoCards()}
      </div>
      <p
        className="text-center fs-4 text-uppercase fw-bold mt-4"
        style={{ color: "#0D3E5F" }}
      >
        Prof. Colemar Natal e Silva
      </p>
      <div className="row d-flex justify-content-start container-fluid">
        {renderProfColemarNatalESilvaCards()}
      </div>
      <p
        className="text-center fs-4 text-uppercase fw-bold mt-4"
        style={{ color: "#0D3E5F" }}
      >
        Aparecida de Goiânia
      </p>
      <div className="row d-flex justify-content-start container-fluid">
        {renderAparecidaDeGoianiaCards()}
      </div>
      <p
        className="text-center fs-4 text-uppercase fw-bold mt-4"
        style={{ color: "#0D3E5F" }}
      >
        Jatobá
      </p>
      <div className="row d-flex justify-content-start container-fluid">
        {renderJatobaCards()}
      </div>
      <p
        className="text-center fs-4 text-uppercase fw-bold mt-4"
        style={{ color: "#0D3E5F" }}
      >
        Rialma
      </p>
      <div className="row d-flex justify-content-start container-fluid">
        {renderRialmaCards()}
      </div>
    </div>
  );
}
