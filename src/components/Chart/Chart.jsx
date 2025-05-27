import "./Chart.css";
import ChartBar from "./ChartBar";
export default function Chart(props) {
  const dataGValues = props.dataGs.map(dataG => dataG.value)
  const totalMaximum = Math.max(...dataGValues)
  console.log(totalMaximum)
  return (
    <>
      <div className="chart">
      {props.dataGs.map((dataG) => (
        <ChartBar
          key={dataG.label}
          value={dataG.value}
          maxValue={totalMaximum}
          label={dataG.label}
        />
      ))}
      </div>
    </>
  );
}
