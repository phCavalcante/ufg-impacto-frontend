import { Chart } from "react-google-charts";

export default function Pitchart(props) {
  return (
    <>
    <p  className="text-center fs-4" style={{color: "#0D3E5F"}}>{props.title}</p>
      <Chart
        chartType="PieChart"
        data={props.data}
        options={props.options}
        width={"100%"}
        height={"400px"}
      />
    </>
  );
}
