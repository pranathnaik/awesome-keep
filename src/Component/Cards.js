import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Button from "@material-ui/core/Button";

const Cards = (props) => {
  const deleteNote = () => {
    props.deleteNote(props.id);
  };
  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <Button onClick={deleteNote}>
          <DeleteForeverIcon className="delete-icon" />
        </Button>
      </div>
    </>
  );
};

export default Cards;
