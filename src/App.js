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

  const onDelete = (id) => {
    setAddItem((prev) => {
      return prev.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <Header />
      <MainCard passNote={addNote} />
      {additem.map((value, index) => {
        return (
          <Cards
            key={index}
            id={index}
            title={value.title}
            content={value.content}
            deleteNote={onDelete}
          />
        );
      })}
    </>
  );
};

export default App;
