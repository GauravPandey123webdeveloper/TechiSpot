import React from "react";
import NavBar from "../component/NavBar";
import NewsSideBar from "./NewsSideBar/NewsSideBar";

export default function News() {
  return (
    <div>
      <NavBar />

      <div><NewsSideBar/></div>
    </div>
  );
}
