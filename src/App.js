import React, { useState } from "react";
import Cards from "./Component/Cards";
import MainCard from "./Component/MainCard";
import Header from "./Header";

const App = () => {
  const [additem, setAddItem] = useState([]);
  const addNote = (note) => {
    setAddItem((prev) => {
      return [...prev, note];
    });
  };
  return (
    <>
      <Header />
      <MainCard passNote={addNote} />
      {additem.map((value) => {
        return <Cards title={value.title} content={value.content} />;
      })}
    </>
  );
};

export default App;
