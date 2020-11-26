import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
const MainCard = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log();
  };

  const addEvent = () => {
    props.passNote(note);
  };

  return (
    <>
      <div>
        <form>
          <input
            type="text"
            value={note.title}
            onChange={inputEvent}
            placeholder="title"
            autoComplete="off"
            name="title"
          />

          <textarea
            row=""
            column=""
            type="text"
            value={note.content}
            onChange={inputEvent}
            placeholder="enter description"
            name="content"
          />
          <Button onClick={addEvent}>
            <AddIcon className="plus-sign" />
          </Button>
        </form>
      </div>
    </>
  );
};

export default MainCard;
