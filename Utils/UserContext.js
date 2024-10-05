import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
  lgn:"",
});

export default UserContext;
