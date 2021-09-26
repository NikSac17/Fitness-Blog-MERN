import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = () => {
  const host = "http://localhost:5000";

  const [data, setData] = useState([]);

  //get all notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setData(json);
  };

  //add note
  const addNote = async (title, description) => {
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description }),
    });
    const json = await response.json();
    setData(data.concat(json));
  };

  //update note
  const updateNote = async () => {};

  //delete note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = response.json();
    const newData = data.filter((element) => {
      return element._id !== id;
    });
    setData(newData);
  };

  return (
      <NoteContext.Provider
        value={{ data, getNotes, addNote, updateNote, deleteNote }}
      >
        {props.children}
      </NoteContext.Provider>
  );
};

export default NoteState;
