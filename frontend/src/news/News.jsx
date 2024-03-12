import React from "react";
import NavBar from "../component/NavBar";
import NewsSideBar from "./NewsSideBar/NewsSideBar";

import NewsPost from "./NewsPost";

export default function News() {
  return (
    <div>
      <NavBar />
      <NewsSideBar />
      <NewsPost />
    </div>
  );
}
