import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "Parents" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {},"I am h1 tag" ),
    React.createElement("h2", {},"I am h2 tag" ),
  ]),
  
]);
const  jsxheading = <h1 id= "Parent">this is jsx</h1>

console.log(jsxheading); // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);
