import React, { useState, useEffect } from "react";
import { foodOptions, fetchData } from "../utils/fetchData";

const NutritionTracker = () => {
  const [food, setFood] = useState("");
  const [nutrition, setNutrition] = useState({});
  useEffect(() => {
    const fetchExercisesData = async () => {
      const newNutrition = await fetchData(
        "https://calorieninjas.p.rapidapi.com/v1/nutrition",
        foodOptions
      );

      setNutrition(newNutrition);
    };

    fetchExercisesData();
  }, [food]);
  const handleSubmit = async () => {
    if (food) {
      const foodData = await fetchData(
        "https://calorieninjas.p.rapidapi.com/v1/nutrition",
        foodOptions
      );
      console.log(foodData);

      setFood("");
      setNutrition(foodData);
    }
  };
  return (
    <div className="w-full max-w-lg m-auto mt-52 ">
      <form className="bg-purple shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-white-700 text-sm font-bold mb-2"
            for="Height"
          >
            Food Name
          </label>
          <div>
            <input
              className="shadow appearance-none border border rounded w-full py-2 px-3 text-blue-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="food"
              type="text"
              placeholder="Enter dish name"
              value={food}
              onChange={(e) => {
                setFood(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
            type="button"
            onClick={handleSubmit}
          >
            Calculate Nutrion
          </button>
        </div>
        <div className="mb-6">
          {nutrition ? (
            <>
              <label
                className="block text-white-700 text-sm font-bold mb-2"
                for="nutrition"
              >
                Nutrional Value
              </label>
              <div>{/* <p>Protein: {nutrition.items[0].protein_g}</p> */}</div>
            </>
          ) : (
            <></>
          )}
        </div>
      </form>
    </div>
  );
};

export default NutritionTracker;
