// import "./ChartBar.css";

export default function ChartBar(props) {
  let barFill = "0%";
  if (props.maxValue > 0) {
    barFill = Math.round((props.value / props.maxValue) * 100);
  }
  return (
    <>
      <div className="chart-bar">
        <div className="chart-bar__inner">
          <div className="chart-bar__fill" style={{ height: barFill }}></div>
        </div>
        <div className="chart-bar__label">{props.label}</div>
      </div>
    </>
  );
}
