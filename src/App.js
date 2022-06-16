import React from "react";
import Nav from "./Components/Nav";
import Entry from "./Components/Entry";
import data from "./Data/data";

export default function App() {
  const entries = data.map((entry) => <Entry key={entry.id} data={entry} />);

  return (
    <div className="container">
      <Nav />
      <section className="entries-wrapper">{entries}</section>
    </div>
  );
}
