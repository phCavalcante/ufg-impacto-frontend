import React from "react";
import Row from "../../layout/row/Row";

import "./footer.css";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#2D5672",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.20)",
        width: "100%",
        marginTop: 110,
      }}
    >
      <Row>
        <div className="col-sm-6">
          <p className="text-center fs-6">
            UFG - Universidade Federal de Goiás
            <br />
            CNPJ: 01.567.601/0001-43 Avenida
            <br />
            Esperança s/n, Câmpus Samambaia - Prédio da Reitoria.
            <br />
            CEP 74690-900 Goiânia - Goiás - Brasil. <br />
            Fone: +55 (62) 3521.1000
          </p>
        </div>
        <div
          className="col-sm-6"
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <p className="text-center fs-6">
            <strong>UFG Impacto</strong> <br />
            Universidade Federal de Goiás - UFG. Todos os direitos reservados.
          </p>
        </div>
      </Row>
    </footer>
  );
}
