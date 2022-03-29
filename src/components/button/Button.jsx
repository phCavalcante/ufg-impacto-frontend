import  './button.css'


export default function Button(props) {
    return (
        <button type="button" className="btn btn-primary">{props.descricao}</button>
    )
}