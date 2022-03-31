import ReactWordcloud from "react-wordcloud";

export default function Wordcloud(props) {

  const options = {
    rotations: 2,
    rotationAngles: [-90, 0],
    colors: [
      "#1f77b4",
      "#2ca02c",
      "#9467bd",
      "#ffffff",
      "#632A50",
      "#8B9EB7",
      "#698816",
    ],
    fontFamily: "impact",
    enableTooltip: true,
    deterministic: false,
    fontSizes: [18, 40],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 1,
    rotationAngles: [0, 90],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000,
  };

  return (
    <>
    <p className="text-center fs-4" style={{color: "#0D3E5F"}}>{props.title} <span className="fs-6">visão geral</span></p>
      <ReactWordcloud
        className="card"
        style={{ backgroundColor: "#2D5672", height: "25vh" }}
        words={props.words}
        options={options}
      />
    </>
  );
}
