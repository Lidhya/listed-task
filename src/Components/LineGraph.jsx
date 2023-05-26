import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Dropdown from "../assets/svg/Dropdown.svg";
import axios from "../Axios";
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
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, guestsResponse] = await Promise.all([
          axios.get("/users"),
          axios.get("/guests"),
        ]);

        setUsers(usersResponse.data);
        setGuests(guestsResponse.data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };

    fetchData();
  }, []);

  const updateData = () => {
    const WeekLabels = users.map((user) => `Week ${user.week}`);
    const usersNum = users.map((user) => user.numUsers);
    const guestsNum = guests.map((guest) => guest.numUsers);

    return { WeekLabels, usersNum, guestsNum };
  };

  const { WeekLabels, usersNum, guestsNum } = updateData();

  const chartData = {
    labels: WeekLabels,
    datasets: [
      {
        label: "Guests",
        data: guestsNum,
        fill: true,
        backgroundColor: "#9BDD7C",
        borderColor: "#9BDD7C",
        tension: 0.4,
      },
      {
        label: "Users",
        data: usersNum,
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
    </>
  );
};

export default LineGraph;
