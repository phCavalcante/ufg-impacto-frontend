import Wordcloud from "../wordcloud/Wordcloud";
import Piechart from "../charts/Piechart";
import Barchart from "../charts/Barchart";
import Legend from "../legend/Legend";
import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "https://api-ufg-impacto.herokuapp.com/api/indicator/project";

export default function Project() {

  const [projects, setProjects] = useState([]);
  const [dataPie, setDataPie] = useState([
    ["Type", "Percentage"],
    ["Ensino", 40],
    ["Pesquisa", 40],
    ["Extensão", 20],
  ])
  const [optionsPie, setOptionsPie] = useState({ title: "Projetos"})
  const [titlePie, setTitleOptionsPie] = useState("Visão Geral por Tipo de Projeto")

  const [dataBar, setDataBar] = useState([
    ["Unidade Acadêmica", "Número de Projetos"]
  ])

  const [optionsBar, setOptionsBar] = useState( {
    chart: {
      title: "Número de projetos",
      subtitle: "Unidades acadêmicas",
    },
  })

  const [titleBar, setTitleBar] = useState("Visão Geral por Unidade Acadêmica")

  const [dataWords, setDataWords] = useState([{text: "UFG Impacto", value: 100}])

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
        countByProjectType()
        countByAcademicUnit()
        wordExtractor()
      });
  }, [dataPie, projects]);

  function countByProjectType() {
    let extension = 0;
    let teaching = 0;
    let research = 0;

    for (let [key, value] of Object.entries(projects)) {
      value.forEach((project) => {
        if (project.type == "Extensão") {
          extension += 1;
        } else if (project.type == "Ensino") {
          teaching += 1;
        } else {
          research += 1;
        }
      });
    }

    let newData = [
      ["Type", "Percentage"],
      ["Ensino", teaching],
      ["Pesquisa", research],
      ["Extensão", extension],
    ]

    setDataPie(newData)

  }

  function countByAcademicUnit() {

    let dataArray = [["Unidade Acadêmica", "Número de Projetos"]]

    for (let [key, value] of Object.entries(projects)) {

        let projects = [value[0].academicUnitAcronym, value.length]
        dataArray.push(projects)
    }

    setDataBar(dataArray)

  }

  function wordExtractor() {

    var wordArray = []

    for (let [key, value] of Object.entries(projects)) {

      value.forEach((project) => {

        let w = ['', '']
        
        let arrayWordUniq = [...new Set(project.title.split(" "))]

        arrayWordUniq = arrayWordUniq.map((word) => {
          return word.replace(',', '')
        })

        arrayWordUniq.forEach((word) => {

          if (word.trim().length > w[0].length) {
            w[0] = word;
          }

        })

        // console.log(`${w[0]} w1`)

        arrayWordUniq.splice(arrayWordUniq.indexOf(w[0]), 1);

        arrayWordUniq.forEach((word) => {

          if (word.trim().length > w[1].length) {
            w[1] = word;
          }

        })

        // console.log(`${w[1]} w2`)

        wordArray = wordArray.concat(w)

      })
    }

    // console.log(`${wordArray.indexOf(",")} wordArray`)

    wordArray = [...new Set(wordArray)]
    let arrayData = wordArray.map((word, index) => ({text: word, value: index}))
    // console.log(arrayData)
    setDataWords(arrayData)

  }

  return (
    <div className="container-fluid" style={{ marginTop: "1%" }}>
      <div className="row d-flex justify-content-center">
        <div className="col-sm-12">
          <Wordcloud words={dataWords} title="Projetos"/>
        </div>
      </div>
      <div className="row d-flex justify-content-center align-items-center mt-5">
        <div className="col-sm-6">
          <Piechart data={dataPie} options={optionsPie} title={titlePie} />
        </div>
        <div className="col-sm-6">
          <Legend />
        </div>
      </div>
      <div className="row d-flex justify-content-start align-items-start">
        <div className="col-sm-2 offset-1" style={{position: 'relative', marginLeft: '10%'}}>
         <a href="projects-detail" className="btn btn-secondary" style={{color: "white", display: "flex", textAlign: "center", justifyContent: "center", alignItems: "center"}}> Detalhes</a>
        </div>
      </div>
      <div className="row d-flex justify-content-start align-items-center">
        <div className="col-sm-12">
          <Barchart data={dataBar} options={optionsBar} title={titleBar} />
        </div>
      </div>
    </div>
  );
}
