import React from "react";
import { IMG_URL } from "../Utils/constant";


const RestaurantCard = (props) => {
  const { resList } = props;
  const { name, cuisines, avgRating, costForTwo } = resList?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          IMG_URL + resList.info.cloudinaryImageId
        }
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join()}</h4>
      <h4>Rating :{avgRating} </h4>
      <h4>{costForTwo} </h4>
    </div>
  );
};
export default RestaurantCard;
