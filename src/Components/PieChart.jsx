import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import axios from "../Axios";
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
  const [error, setError] = useState(false);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/piechart");
        setChartData(response.data);
      } catch (error) {
        setError(true);
      }
    };

    fetchData();
  }, []);

  const updateData = () => {
    const chartValues = chartData.map((item) => item.percentage);
    return chartValues;
  };

  const chartValues = updateData();

  const pieChartData = {
    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    datasets: [
      {
        data: chartValues,
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
          radius: "2px",
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

  return (
    <>
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 p-3 rounded flex gap-2.5 items-center absolute left-1/2 transform -translate-x-1/2"
          role="alert"
        >
          <strong className="font-bold">Holy smokes!</strong>
          <span className="block sm:inline">
            Something seriously bad happened.
          </span>
          <span onClick={() => setError(false)}>
            <svg
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      )}
      <div className="text-start flex flex-wrap">
        <Pie data={pieChartData} options={chartOptions} />
      </div>
    </>
  );
};

export default PieChart;
