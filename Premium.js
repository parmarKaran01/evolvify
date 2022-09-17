import React from "react";
import Item from "./Item";
import Nutrabay from "../assets/icons/nutrabay.jpg";
import OptimumNutrition from "../assets/icons/optimumnutrition.jpg";
import GoldGym from "../assets/icons/Goldgym.jpg";
import CureFit from "../assets/icons/Curefit.jpg";
const Premium = () => {
  return (
    <div>
      <div>
        <h3>Nutrition Brands</h3>
        <div className="items">
          <Item
            src={Nutrabay}
            name="Nutrabay"
            description="Hey there"
            link="https://nutrabay.com"
          />
          <Item
            src={OptimumNutrition}
            name="Optimum Nutrition"
            description="Hey there"
            link="https://optimumnutrition.com"
          />
        </div>
      </div>
      <div>
        <h3>Gym Brands</h3>
        <Item
          src={GoldGym}
          name="Gold's Gym"
          description="Hey there"
          link="https://goldsgym.com"
        />
        <Item
          src={GoldGym}
          name="Gold's Gym"
          description="Hey there"
          link="https://goldsgym.com"
        />
      </div>
      <div>
        <h3>Online Fitness Brands</h3>
        <Item
          src={CureFit}
          name="Cure Fit"
          description="Hey there"
          link="https://curefit.com"
        />
        <Item
          src={CureFit}
          name="Cure Fit"
          description="Hey there"
          link="https://curefit.com"
        />
      </div>
    </div>
  );
};

export default Premium;
