import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  PieController,
  CategoryScale,
  PointElement,
  ArcElement,
  Legend,
} from "chart.js";

ChartJS.register(
  PieController,
  CategoryScale,
  PointElement,
  ArcElement,
  Legend
);

const PieChart = () => {
  const chartData = {
    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ["#98D89E", "#EE8484", "#F6DC7D"],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          radius: 4,
          padding: 10,
          font: {
            size: 10,
            weight: 800,
            family: "Arial",
          },
          color: "#000",
        },
      },
    },
  };

  return <div className="text-start"><Pie data={chartData} options={chartOptions} />;</div>
};

export default PieChart;
