import { Chart } from "react-google-charts";

export default function Barchart(props) {

  return (
    <div>
    <p className="text-center fs-4" style={{ color: "#0D3E5F" }}>
        {props.title}
      </p>
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={props.data}
        options={props.options}
      />
    </div>
  );
}
