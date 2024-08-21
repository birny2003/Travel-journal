import React from "react";
import Navbar from "./navbar";

import Destination from "./destination";
import data from "./data";

export default function App() {
  const destination = data.map((item) => {
    return <Destination key={item.id} item={item} />;
  });
  return (
    <div>
      <Navbar />
      <section className="destinations-list">{destination}</section>
    </div>
  );
}
