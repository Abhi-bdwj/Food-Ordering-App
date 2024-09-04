import React, { useState } from "react";
import { useEffect } from "react";
import Shimmer from "../components/Shimmer";
import { MENU_URL } from "../Utils/constant";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resID} = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    try {
      const data = await fetch(
        MENU_URL + resID
      );
      if (!data.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await data.json();

      console.log(json);
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h1> {name}</h1>
      <h1>Menu</h1>
      <h3>Recommended</h3>
      <div>
        <ul>
          {itemCards.map((item)=> <li key={item.card.info.id}>{item.card.info.name} - {"Rs"} {item.card.info.price/100}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
