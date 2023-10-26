import React, { useState } from "react";
import { LineChart } from "./Linechart";
import { UserData } from "./Data";

export const Chart = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
      },
    ],
  });
  return (
    <>
      <div className="w-[96rem] h-[35rem] bg-white ml-1 p-5 rounded-lg mb-6 mt-[1.5rem]">
        <h2 className="text-2xl">User</h2>
        <div className="flex justify-end gap-2 -mt-8">
          <h2>Sort By :</h2>
          <select className="bg-blue-600 text-white rounded-md">
            <option value="year">Year</option>
            <option value="month">Month</option>
            <option value="day">Day</option>
          </select>
        </div>

        <div className="ml-16">
          <LineChart chartData={userData} />
        </div>
      </div>
    </>
  );
};
