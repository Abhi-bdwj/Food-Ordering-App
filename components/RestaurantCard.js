import React from "react";
import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resList } = props;
  const { name, cuisines, avgRating, costForTwo } = resList?.info;

  return (
    <div className="res-card p-4 w-64 my-4 bg-white shadow-lg rounded-lg hover:shadow-xl hover:bg-gray-100 transition-shadow duration-300">
      <img
        className="res-logo w-full h-40 object-cover rounded-t-lg"
        src={IMG_URL + resList.info.cloudinaryImageId}
        alt="res-logo"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 truncate">{name}</h3>
        <h4 className="text-gray-500 text-sm mb-2 truncate">
          {cuisines.join(", ")}
        </h4>
        <h4 className="text-yellow-500 text-sm mb-1">Rating: {avgRating}</h4>
        <h4 className="text-gray-700 text-sm">Cost for two: {costForTwo}</h4>
      </div>
    </div>
  );

};

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-lg m-1 p-1">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
