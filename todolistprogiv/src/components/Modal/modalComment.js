import { Button, TextField } from "@material-ui/core";
import React from "react";

function modalComment() {
  fetch("http://localhost:8080/api/todoItems", {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    mode: "cors",
    cache: "default",
  });
  return (
    <div className="background">
      <div className="modalContainer">
        <Button />
        <div className="Title">
          <h1>Add a Comment</h1>
        </div>
        <div className="commentBody">
            <TextField></TextField>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}

export default modalComment;
