import React from "react";
import data from "../data";
import Entry from "./Entry";
import Navbar from "./Navbar";

export default function App() {
  const cards = data.map((x) => {
    return <Entry key={x.id} {...x} />;
  });
  return (
    <div className="app--container">
      <Navbar />
      <div className="entry_area">{cards}</div>
    </div>
  );
}
