import RestaurantCard from "./RestaurantCard";
import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    console.log("useEffect Called");
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.9141069&lng=78.1535928&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const handlesearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const searchHandler = () => {
    const filteredList = restaurantList.filter(
      (res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
        res.info.cuisines.some((cuisine) =>
          cuisine.toLowerCase().includes(searchText.toLowerCase())
        )
    );
    setRestaurantList(filteredList);
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search food or restaurant"
            value={searchText}
            onChange={handlesearchTextChange}
          />
          <button onClick={searchHandler}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resList={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
