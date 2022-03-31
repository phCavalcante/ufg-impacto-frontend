import Wordcloud from "../wordcloud/Wordcloud";
import Piechart from "../charts/Piechart";
import Barchart from "../charts/Barchart";
import Legend from "../legend/Legend";
import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "http://localhost:9654/api/indicator/course-campus";
const baseUrl2 = "http://localhost:9654/api/indicator/course-academic-unit";

export default function Course() {

  const [courses, setCourses] = useState([]);
  const [courses2, setCourses2] = useState([]);
  const [dataPie, setDataPie] = useState([
    ["Campus", "Percentage"],
    ["Cidade De Goiás", 10],
    ["Catalão", 10],
    ["Samambaia", 10],
    ["Prof. Colemar Natal E Silva", 15],
    ["Aparecida De Goiânia", 10],
    ["Jatobá", 15],
    ["Rialma", 30],
  ])
  const [optionsPie, setOptionsPie] = useState({ title: "Cursos"})
  const [titlePie, setTitleOptionsPie] = useState("Visão Geral por Campus")

  const [dataBar, setDataBar] = useState([
    ["Unidade Acadêmica", "Número de Cursos"]
  ])

  const [optionsBar, setOptionsBar] = useState( {
    chart: {
      title: "Número de cursos",
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
        setCourses(response.data);
        countByCampus()
        wordExtractor()
      });

      axios
      .get(baseUrl2, {
        headers: {
          "Content-Type": "application/json",
          // 'Access-Control-Allow-Origin': '*'
        },
      })
      .then((response) => {
        setCourses2(response.data);
        countByAcademicUnit()

      });

    
  }, [dataPie, courses]);

  function countByCampus() {
    let cidadeDeGoias = 0;
    let catalao = 0;
    let samambaia = 0;
    let profColemarNatalSilva = 0;
    let aparecidaGoiania = 0;
    let jatoba = 0;
    let rialma = 0;

    for (let [key, value] of Object.entries(courses)) {
      value.forEach((course) => {
        if (course.campus == "Cidade De Goiás") {
          cidadeDeGoias += 1;
        } else if (course.campus == "I") {
            catalao += 1;
        } else if (course.campus == "Samambaia") {
            samambaia += 1;
        } else if (course.campus == "Prof. Colemar Natal E Silva") {
            profColemarNatalSilva += 1;
        } else if (course.campus == "Jatobá") {
            jatoba += 1;
        } else if (course.campus == "Rialma") {
            rialma += 1;
        }
        
      });
    }

    let newData = [
        ["Campus", "Percentage"],
        ["Cidade De Goiás", cidadeDeGoias],
        ["Catalão", catalao],
        ["Samambaia", samambaia],
        ["Prof. Colemar Natal E Silva", profColemarNatalSilva],
        ["Aparecida De Goiânia", aparecidaGoiania],
        ["Jatobá", jatoba],
        ["Rialma", rialma],
      ]

    setDataPie(newData)

  }

  function countByAcademicUnit() {

    let dataArray = [["Unidade Acadêmica", "Número de Cursos"]]

    for (let [key, value] of Object.entries(courses2)) {

        let acronyms = [value[0].acronym, value.length]
        dataArray.push(acronyms)
    }

    setDataBar(dataArray)

  }

  function wordExtractor() {

    var wordArray = []

    for (let [key, value] of Object.entries(courses)) {

      value.forEach((course) => {

        let w = ['', '']
        
        let arrayWordUniq = [...new Set(course.name.split(" "))]

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
          <Wordcloud words={dataWords} title="Cursos"/>
        </div>
      </div>
      <div className="row d-flex justify-content-center align-items-center mt-5">
        <div className="col-sm-8">
          <Piechart data={dataPie} options={optionsPie} title={titlePie} />
        </div>
        <div className="col-sm-2" >
         <a href="course-detail" className="btn btn-secondary" style={{color: "white", display: "flex", textAlign: "center", justifyContent: "center", alignItems: "center"}}> Detalhes</a>
        </div>
        {/* <div className="col-sm-6">
          <Legend />
        </div> */}
      </div>
      {/* <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-2" >
         <a href="projects-detail" className="btn btn-secondary" style={{color: "white", display: "flex", textAlign: "center", justifyContent: "center", alignItems: "center"}}> Detalhes</a>
        </div>
      </div> */}
      <div className="row d-flex justify-content-start align-items-center">
        <div className="col-sm-12">
          <Barchart data={dataBar} options={optionsBar} title={titleBar} />
        </div>
      </div>
    </div>
  );
}
