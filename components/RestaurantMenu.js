import React, { useState } from "react";
import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resID } = useParams();
  const resInfo = useRestaurantMenu(resID);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const categories =
    resInfo?.cards?.flatMap(
      (card) =>
        card?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
          (c) =>
            c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) || []
    ) || [];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Restaurant Info */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">{name}</h1>
        <p className="text-lg text-gray-600">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>

        {categories.map((category, index) => (
          <RestaurantCategory
          key={`${category?.card?.card.title}-${index}`}
          data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() => {
              setShowIndex(index === showIndex ? null : index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
