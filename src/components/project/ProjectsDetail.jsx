import { useState, useEffect } from "react";
import CardProject from "../cards/CardProject";
import Label from "../label/Label";
import axios from "axios";
import Carousel from "../carousel/Carousel";

const baseUrl = "http://localhost:9654/api/indicator/project-type";

export default function ProjectsDetail() {
  const fakeData = {
    title:
      "A biodiversidade urbana e o funcionamento de ecossistemas: o papel do plâncton em lagos urbanos do estado de Goiás e suas implicações para conservação",
    description:
      "Compreender a dinâmica das comunidades biológicas na paisagem é fundamental para a manutenção dos serviços ecossistêmicos diretos e indiretos aos seres humanos. Os lagos urbanos estão entre os mais vulneráveis aos processos de urbanização-antropização, pois são ambientes espacialmente isolados, pequenos e pouco protegidos por programas de monitoramento. Nosso estudo visa reduzir as lacunas de estudos sobre estes processos e as respostas da biota aquática. Para isso, nosso objetivo central é estudar os fatores ambientais determinantes da biodiversidade fitoplanctônica e zooplanctônica, em lagos urbanos do estado de Goiás, e relacionar aos conceitos e problemas prioritários para a conservação da biodiversidade aquática urbana. O plâncton é um prático modelo para estudos em nível de comunidades e ecossistemas, uma vez que apresenta curto tempo de geração de suas populações e rápida resposta as mudanças ambientais. O estudo será realizado inicialmente utilizando quatorze lagos urbanos como modelos em diferentes períodos de amostragens, porém, os locais amostrados poderão ser ampliados ao longo do período de desenvolvimento da pesquisa. Para avaliar a comunidade fitoplanctônica e zooplanctônica e estabelecer relações com o ambiente, nós utilizaremos uma abordagem taxonômica e funcional baseadas na morfologia, na fisiologia, comportamento e história de vida dos organismos. Este estudo contribuirá para o entendimento dos fatores limitantes da distribuição espacial e temporal da diversidade planctônica, fornecendo uma base teórica e conceitual para investigar os processos que atuam sobre as comunidades em lagos urbanos, bem como compreender a influência destes organismos sobre os serviços ecossistêmicos e a conservação urbana. Portanto, pretende-se gerar conhecimentos teóricos e aplicados, além de qualificação de recursos humanos e estimulação desta área de pesquisa no centro-oeste brasileiro.",
    academicUnit: "INSTITUTO DE CIENCIAS BIOLOGICAS",
  };

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
    return projects["Ensino"].map((project) => (
        <div className="col-sm-3">
              <CardProject
                title={
                  project.title[0].toUpperCase() +
                  project.title.toLowerCase().slice(1)
                }
                description={project.summary}
                academicUnit={project.academicUnitName}
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
