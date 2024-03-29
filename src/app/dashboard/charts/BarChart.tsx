// import React from "react";
// import { Chart } from "react-google-charts";

// export const data = [
//   ["City", "2010 Population", "2000 Population"],
//   ["New York City, NY", 8175000, 8008000],
//   ["Los Angeles, CA", 3792000, 3694000],
//   ["Chicago, IL", 2695000, 2896000],
//   ["Houston, TX", 2099000, 1953000],
//   ["Philadelphia, PA", 1526000, 1517000],
// ];

// export const options = {
//   title: "Population of Largest U.S. Cities",
//   chartArea: { width: "50%" },
//   hAxis: {
//     title: "Total Population",
//     minValue: 0,
//   },
//   colors: ["rgb(53, 138, 148)", "rgb(40, 34, 70)"],
//   vAxis: {
//     title: "City",
//   },
// };

// export default function BarChart() {
//   return (
//     <Chart
//       chartType="BarChart"
//       width="100%"
//       height="270px" 
//       data={data}
//       options={options}
//     />
//   );
// }

import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["City", "2010 Population", "2000 Population"],
  ["New York City, NY", 8175000, 8008000],
  ["Los Angeles, CA", 3792000, 3694000],
  ["Chicago, IL", 2695000, 2896000],
  ["Houston, TX", 2099000, 1953000],
  ["Philadelphia, PA", 1526000, 1517000],
];

const options = {
  title: "Population of Largest U.S. Cities",
  chartArea: { width: "50%" },
  hAxis: {
    title: "Total Population",
    minValue: 0,
  },
  colors: ["rgb(53, 138, 148)", "rgb(40, 34, 70)"],
  vAxis: {
    title: "City",
  },
};

const BarChart: React.FC = () => {
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="270px"
      data={data}
      options={options}
    />
  );
};

export default BarChart;

