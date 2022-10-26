import { HalfPieChart } from "half-pie-chart";
import React, { Component } from "react";

class HalfChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      right: [
        {
          value: 20,
          displayValue: "20 $",
          text: "Collected",
          color: "#4cb38e",
        },
      ],
      left: [
        {
          value: 10,
          displayValue: "10 $",
          text: "Pending",
          color: "#eee36b",
        },
      ],
    };
  }
  render() {
    return (
      <HalfPieChart
        name="rentStatus"
        right={this.state.right}
        left={this.state.left}
        title="Rent Status"
      />
    );
  }
}
export default HalfChart;