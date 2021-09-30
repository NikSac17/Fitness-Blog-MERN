import React, { useContext, useState } from "react";
import noteContext from "./context/noteContext";

const AddNote = ({showAlert}) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [notes, setNotes] = useState({ title: "", description: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(notes.title, notes.description);
    notes.title = "";
    notes.description = "";
    showAlert("Note added", "success")
  };

  const onChange = (e) => {
    setNotes({ ...notes, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-4">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={notes.title}
            onChange={onChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Description
          </label>
          <input
            type="text"
            name="description"
            value={notes.description}
            onChange={onChange}
            className="form-control"
            id="description"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" onClick={handleClick} className="btn btn-primary">
          Add note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
