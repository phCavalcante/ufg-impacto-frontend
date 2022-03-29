export default function Modal(props) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-secondary mb-3"
        data-bs-toggle="modal"
        data-bs-target={"#exampleModal" + props.idModal}
      >
        Visualizar
      </button>

      <div
        className="modal fade"
        id={"exampleModal" + props.idModal}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {props.title}
              </h5>
            </div>
            <div className="modal-body">
              <h5>Descrição</h5>
              <p style={{color: "black"}}>{props.description}</p>
              <h5> Unidade Acadêmica</h5>
              <p  style={{color: "black"}}> {props.academicUnit}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
