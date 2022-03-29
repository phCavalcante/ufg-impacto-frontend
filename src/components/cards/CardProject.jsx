import "./card.css"

export default function CardProject(props) {
    
    return (
        <div className="card mb-3" style={{background: "#2D5672", height: "20rem",}}>
        <div className="card-body">
          <h5 className="card-title text-truncate" style={{color: 'white'}}>{props.title}</h5>
          <h6 className="card-subtitle mb-2 mt-3 text-uppercase" style={{color: 'white'}}>Descrição</h6>
          <p className="card-text fw-light text-truncate" style={{color: 'white'}}>{props.description}</p>
          <h6 className="card-subtitle mb-2 text-uppercase" style={{color: 'white'}}>Unidade Acadêmica</h6>
          <p className="card-text fw-light" style={{color: 'white'}}>{props.academicUnit}</p>
          <a href="#" className="btn btn-secondary mb-3" style={{color: "white", display: "flex", textAlign: "center", justifyContent: "center", alignItems: "center", width: "40%"}}>
          Visualizar
        </a>
        <a href="#" className="card-link" style={{color: 'white'}}>Página na Web</a>
        </div>
      </div>
    )
}