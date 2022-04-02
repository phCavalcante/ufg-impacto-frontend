import { useEffect, useState } from "react";
import axios from "axios";

import Barchart from "../charts/Barchart";

const baseUrl = "http://localhost:9654/api/indicator/students-data";

export default function Student(props) {
  const [studentsData, setStudentsData] = useState({
    totalStudents: 56779,
    totalGraduateStudents: 15872,
    maleGraduateStudents: 6563,
    femaleGraduateStudents: 9309,
    totalBlackRaceBrown: 23920,
    totalWhite: 19638,
    totalRaceUnknown: 11759,
    totalAffirmativeAction: 12107,
    mapGraduateStudentsByYear: {
      2010: 11,
      2011: 25,
      2012: 58,
      2013: 825,
      2014: 1415,
      2015: 2040,
      2016: 2136,
      2017: 2383,
      2018: 2440,
      2019: 2431,
      2020: 2073,
      2021: 35,
    },
  });

  const [dataBar, setDataBar] = useState([
    ["Docentes", "Docentes"],
    ['Graduados', studentsData.totalGraduateStudents],
    ['Não graduados', (studentsData.totalStudents - studentsData.totalGraduateStudents)],
  ]);

  const [optionsBar, setOptionsBar] = useState({
    chart: {
      title: "Docentes",
      subtitle: "Graduados e Não Graduados",
    }
  });

  const [titleBar, setTitleBar] = useState("Visão Geral");

  /**
   * 
   */

  const [dataSexBar, setDataSexBar] = useState([
    ["Docentes", "Docentes"],
    ['Masculino', studentsData.maleGraduateStudents],
    ['Feminino', studentsData.femaleGraduateStudents],
  ]);

  const [optionsSexBar, setSexOptionsBar] = useState({
    chart: {
      title: "Docentes",
      subtitle: "Graduados por sexo",
    },
  });

  const [titleSexBar, setSexTitleBar] = useState("Visão Geral");

  /**
   * 
   */

  const [dataRaceBar, setDataRaceBar] = useState([
    ["Docentes", "Docentes"],
    ['Negros e Pardos', studentsData.totalBlackRaceBrown],
    ['Brancos e Não Informado/Declarado', (studentsData.totalWhite + studentsData.totalRaceUnknown)],
  ]);

  const [optionsRaceBar, setOptionsRaceBar] = useState({
    chart: {
      title: "Acadêmicos",
      subtitle: "Graduados por Raça",
    },
  });

  const [titleRaceBar, setRaceTitleBar] = useState("Visão Geral");

   /**
   * 
   */

  const [dataAffirmativeActionBar, setDataAffirmativeActionBar] = useState([
    ["Docentes", "Docentes"],
    ['Ação Afirmativa', studentsData.totalAffirmativeAction],
    ['Ampla Concorrência', (studentsData.totalGraduateStudents - studentsData.totalAffirmativeAction)],
  ]);

  const [optionsAffirmativeActionBar, setOptionsAffirmativeActionBar] = useState({
    chart: {
      title: "Docentes",
      subtitle: " Graduados por Ação afirmativa e Ampla Concorrência",
    },
  });

  const [titleAffirmativeActionBar, setTitleAffirmativeActionBar] = useState("Visão Geral");

  /**
   * 
   */

   const [dataGraduateStudentsByYearBar, setDataGraduateStudentsByYearBar] = useState([
    ["Docentes graduados por ano", "Docentes"],
    ['2010', studentsData.mapGraduateStudentsByYear[2010]],
    ['2011', studentsData.mapGraduateStudentsByYear[2011]],
    ['2012', studentsData.mapGraduateStudentsByYear[2012]],
    ['2013', studentsData.mapGraduateStudentsByYear[2013]],
    ['2014', studentsData.mapGraduateStudentsByYear[2014]],
    ['2015', studentsData.mapGraduateStudentsByYear[2015]],
    ['2016', studentsData.mapGraduateStudentsByYear[2016]],
    ['2017', studentsData.mapGraduateStudentsByYear[2017]],
    ['2018', studentsData.mapGraduateStudentsByYear[2018]],
    ['2019', studentsData.mapGraduateStudentsByYear[2019]],
    ['2020', studentsData.mapGraduateStudentsByYear[2020]],
    ['2021', studentsData.mapGraduateStudentsByYear[2021]],
  ]);

  const [optionsGraduateStudentsByYearBar, setOptionsGraduateStudentsByYearBar] = useState({
    chart: {
      title: "Docentes",
      subtitle: "Graduados Geral por Ano",
    },
  });

  const [titleGraduateStudentsByYearBar, setTitleGraduateStudentsByYearBar] = useState("Visão Geral")

  useEffect(() => {
    axios
      .get(baseUrl, {
        headers: {
          "Content-Type": "application/json",
          // 'Access-Control-Allow-Origin': '*'
        },
      })
      .then((response) => {
        setStudentsData(response.data);
      });
  });

  return (
    <div className="container-fluid" style={{ marginTop: "1%" }}>
      <p className="text-center fs-4" style={{ color: "#0D3E5F" }}>
        Outros indicadores <span className="fs-6">visão geral</span>
      </p>
      <h5 className="text-center fs-5" style={{ color: "#0D3E5F" }}>Dados desde 2010 até 2021</h5>
      <div className="row d-flex justify-content-start align-items-center">
        <div className="col-sm-6">
          <Barchart data={dataBar} options={optionsBar}/>
        </div>
        <div className="col-sm-6">
          <Barchart data={dataSexBar} options={optionsSexBar}/>
        </div>
        <div className="col-sm-6">
          <Barchart data={dataRaceBar} options={optionsRaceBar}/>
        </div>
        <div className="col-sm-6">
          <Barchart data={dataAffirmativeActionBar} options={optionsAffirmativeActionBar}/>
        </div>
        <div className="col-sm-12">
          <Barchart data={dataGraduateStudentsByYearBar} options={optionsGraduateStudentsByYearBar}/>
        </div>
      </div>
      <div className="row d-flex justify-content-start align-items-start" style={{marginTop: '2%'}}>
        <div className="col-sm-2">
         <a href="company" className="btn btn-secondary" style={{color: "white", display: "flex", textAlign: "center", justifyContent: "center", alignItems: "center"}}>Empresas criadas por egressos da UFG</a>
        </div>
      </div>
    </div>
  );
}
