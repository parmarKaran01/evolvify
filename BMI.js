import React, { useState } from "react";

const BMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [status, setStatus] = useState("");
  const [bmi, setBmi] = useState(null);

  const handleSubmit = () => {
    let bmi = (weight / (height / 100) ** 2).toFixed(2);
    setBmi(bmi);
    let newStatus = getStatus(bmi);

    setStatus(newStatus);

    setHeight("");
    setWeight("");
  };
  const getStatus = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    else if (bmi <= 24.9 && bmi >= 18.5) return "Normal";
    else if (bmi > 24.9 && bmi <= 29.9) return "Overweight";
    else return "Obese";
  };
  return (
    <div className="w-full max-w-lg m-auto mt-52 ">
      <form className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-white-700 text-sm font-bold mb-2"
            for="Height"
          >
            Height in Cms
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Height"
            type="number"
            placeholder="Height in cms"
            value={height}
            onChange={(e) => {
              setHeight(e.target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-white-700 text-sm font-bold mb-2"
            for="password"
          >
            Weight in Kgs
          </label>
          <input
            className="shadow appearance-none border border rounded w-full py-2 px-3 text-blue-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="weight"
            type="number"
            placeholder="Weight in Kgs"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
            type="button"
            onClick={handleSubmit}
          >
            Calculate BMI
          </button>
        </div>
        {bmi && (
          <div className="flex items-center justify-center flex-col mt-4 ">
            <p color="black">You are {status}</p>
            <p color="black">Your BMI is {bmi}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default BMI;
