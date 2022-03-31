import "./card.css"
import Modal from "../modal/ModalCourse"

export default function CardCourse(props) {
    
    return (
        <div className="card mb-3" style={{background: "#2D5672", height: "20rem",}}>
        <div className="card-body">
          <h5 className="card-title text-truncate" style={{color: 'white'}}>{props.title}</h5>
          <h6 className="card-subtitle mb-2 mt-3 text-uppercase" style={{color: 'white'}}>Cidade</h6>
          <p className="card-text fw-light text-truncate" style={{color: 'white'}}>{props.city}</p>
          <h6 className="card-subtitle mb-2 mt-3 text-uppercase" style={{color: 'white'}}>Campus</h6>
          <p className="card-text fw-light text-truncate" style={{color: 'white'}}>{props.campus}</p>
          <h6 className="card-subtitle mb-2 text-uppercase" style={{color: 'white'}}>Unidade Acadêmica</h6>
          <p className="card-text fw-light" style={{color: 'white'}}>{props.academicUnit}</p>
          <h6 className="card-subtitle mb-2 mt-3 text-uppercase" style={{color: 'white'}}>Modalidade</h6>
          <p className="card-text fw-light text-truncate" style={{color: 'white'}}>{props.modality}</p>
          {/* <a href="#" className="btn btn-secondary mb-3" style={{color: "white", display: "flex", textAlign: "center", justifyContent: "center", alignItems: "center", width: "40%"}}>
          Visualizar
        </a> */}
        {/* {props.children} */}
        <Modal title={props.title} city={props.city} campus={props.campus} academicUnit={props.academicUnit} modality={props.modality} idModal={props.idModal}/>
        <a href="#" className="card-link" style={{color: 'white'}}>Página na Web</a>
        </div>
      </div>
    )
}