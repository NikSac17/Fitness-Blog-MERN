import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import noteContext from "./context/noteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

const Notes = () => {
  const context = useContext(noteContext);
  const {data, getNotes} = context;
  let history = useHistory();

  useEffect(()=>{
    if(localStorage.getItem("token")){
      getNotes();
    }
    else{
      history.push("/login");
    }
  })

  return (
    <div className="container">
      <AddNote />
    </div>
  );
};

export default Notes;
