import React from "react";
import Nav from "./Components/Nav";
import Entry from "./Components/Entry";
import data from "./Data/data";
import { Helmet } from "react-helmet";

export default function App() {
  const entries = data.map((entry) => <Entry key={entry.id} data={entry} />);

  return (
    <div className="container">
      <Helmet>
        <title>My Travel Journal</title>
        <link
          rel="canonical"
          href="https://amiralles-react-mytraveljournal.netlify.app/"
        />
      </Helmet>
      <Nav />
      <section className="entries-wrapper">{entries}</section>
    </div>
  );
}
