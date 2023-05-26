import React from "react";
import { Line } from "react-chartjs-2";
import Dropdown from "../assets/svg/Dropdown.svg";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend);

const LineGraph = () => {
  const chartData = {
    labels: ["January", "February", "March", "April"],
    datasets: [
      {
        label: "Line 1",
        data: [100, 300, 200, 200, 300],
        fill: true,
        backgroundColor: "#9BDD7C",
        borderColor: "#9BDD7C",
        tension: 0.4,
      },
      {
        label: "Line 2",
        data: [500, 100, 500, 100, 300],
        fill: true,
        backgroundColor: "#E9A0A0",
        borderColor: "#E9A0A0",
        tension: 0.5,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          usePointStyle: true,
          font: {
            size: 12,
          },
          color: "#000",
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        min: 0,
        beginAtZero: true,
        grid: {
          display: false,
          drawOnChartArea: false,
          drawBorder: false,
        },
      },

      y: {
        min: 0,
        max: 500,
        ticks: {
          stepSize: 100,
        },
        grid: {
          display: true,
          drawBorder: false,
        },
      },
    },
  };

  return (
    <div className="w-full h-[38%] bg-white rounded-[20px] px-10 py-2 flex flex-col justify-center mb-5">
      <div className="flex flex-col py-2 flex-wrap">
        <div className="font-bold">
          <span>Activities</span>
        </div>
          <div className=" text-xs gap-2 flex items-center font-light -mb-3">
            <span className="text-gray font-montserrat">May - June 2021</span>
            <img className="w-2 h-1" src={Dropdown} alt="Dropdown" />
          </div>
      </div>
      <div className="h-[80%] -mt-3">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default LineGraph;
