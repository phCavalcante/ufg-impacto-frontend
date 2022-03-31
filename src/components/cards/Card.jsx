export default function Card(props) {
  return (
    <div className="card col-sm-3" style={{ width: "17rem", background: "#2D5672", display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center", flexDirection: "column" }} >
      <div className="card-body">
        <h5 className="card-title text-uppercase" style={{color: "white", display: "flex", textAlign: "center", justifyContent: "center", alignItems: "center"}}>{props.title}</h5>
        <p className="card-text" style={{color: "white", display: "flex", textAlign: "center", justifyContent: "center", alignItems: "center"}} >
          {props.description}
        </p>
        <a href={props.link} className="btn btn-secondary" style={{color: "white", display: "flex", textAlign: "center", justifyContent: "center", alignItems: "center"}}>
          Ver
        </a>
      </div>
    </div>
  );
}