import React from "react";
import Row from "../../layout/row/Row";
import { Link } from "react-router-dom";

import img1 from "../../assets/img/ufg.png"
import img2 from "../../assets/img/ufg_impacto.png"

import "./header.css"

export default function Header() {
  return (
      <div style={{ backgroundColor: "#2D5672", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.20)", zIndex: 1}}>
        <Row>
          <div className="col-sm-6" style={{display: "flex"}}>
            <img
              src={img1}
              alt="logo ufg"
              style={{height: "60px", width: "80px"}}
              className="img-fluid"
            />
            <img
              src={img2}
              alt="logo ufg impacto"
              style={{height: "60px", width: "70px"}}
              className="img-fluid"
            />
          </div>

          <div className="col-sm-6" style={{display: "flex", justifyContent: "flex-end", alignContent: "center", alignItems: "center", gap: 10, paddingRight: 20}}>
            <Link to={"/"} className="link">ESTUDE NA UFG</Link>
            <Link to={"/"}><i className="fa fa-instagram fa-2x link"></i></Link>
            <Link to={"/"}><i className="fa fa-linkedin-square fa-2x link"></i></Link>
            <Link to={"/"}><i className="fa fa-facebook-square fa-2x link"></i></Link>
            <Link to={"/"}><i className="fa fa-youtube-play fa-2x link"></i></Link>
          </div>
        </Row>
      </div>
  );
}
