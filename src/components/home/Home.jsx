import React from "react";
import { Link } from "react-router-dom";

import Card from "../cards/Card";

export default function Home() {
  return (
    <div className="container-fluid" style={{marginTop: "10%"}}>
      <div className="row d-flex justify-content-evenly">
        <Card title="projetos" description="Dados e indicadores relacionados aos projetos de extensão, ensino e pesquisa e seus impactos..."/>
        <Card title="cursos" description="Dados e indicadores relacionados aos cursos de graduação e outras modalidades..."/>
        <Card title="turmas" description="Dados e indicadores relacionados as turmas ofertadas incluindo ano de oferta..."/>
        <Card title="outros indicadores" description="Outros indicadores gerais de impacto social e econômico da UFG na sociedade..."/>
      </div>
      <div className="row"></div>
    </div>
  );
}
