import React from "react";
import Navbar from "../components/Navbar";

const linksArray = ["Item One", "Item Two", "Item Three", "Item Four"];

function Home() {
  return (
    <div className="home">
      <Navbar links={linksArray} />
    </div>
  );
}

export default Home;
