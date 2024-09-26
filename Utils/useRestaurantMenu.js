import { useEffect } from "react";
import { useState } from "react";
import { MENU_URL } from "./constants";
const useRestaurantMenu = (resID) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_URL + resID);
      if (!data.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await data.json();

      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return resInfo;
};

export default useRestaurantMenu;
