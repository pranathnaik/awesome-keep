import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Button from "@material-ui/core/Button";

const Cards = (props) => {
  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <Button>
          <DeleteForeverIcon className="delete-icon" />
        </Button>
      </div>
    </>
  );
};

export default Cards;
