import React, { useEffect, useContext } from "react";
import noteContext from "./context/noteContext";

const NoteItem = ({ note, editNote, showAlert}) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;

  useEffect(() => {
    console.log(note);
  }, []);

  return (
    <div className="col-md-3">
      {note.length !== 0 ? (
        <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <i
              className="fas fa-edit mx-2"
              onClick={() => {
                editNote(note);
              }}
            ></i>
            <i
              className="fas fa-trash-alt mx-2"
              onClick={() => {
                deleteNote(note._id);
                showAlert("Deleted Successfully", "success");
              }}
            ></i>
          </div>
        </div>
      ) : (
        "No notes to display"
      )}
    </div>
  );
};

export default NoteItem;
