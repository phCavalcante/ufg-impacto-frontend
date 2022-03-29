
export default function Label(props) {
    return (
        <p className="text-center fs-4" style={{color: "#0D3E5F"}}>{props.title} <span className="fs-6">{props.subtitle}</span></p>
    )
}