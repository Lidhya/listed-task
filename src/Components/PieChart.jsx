import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, PieController, CategoryScale, PointElement, ArcElement,Legend } from 'chart.js';
  
ChartJS.register(PieController, CategoryScale, PointElement, ArcElement, Legend);

const PieChart = () => {
  const chartData = {
    labels: ["Label 1", "Label 2", "Label 3"],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ["#9BDD7C", "#E9A0A0", "#7CA1DD"],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                usePointStyle: true,
              font: {
                size: 10,
                color: "#000",
              },
            },
          },
    },
  };

  return (  
      <Pie data={chartData} options={chartOptions} />
  );
};

export default PieChart;
