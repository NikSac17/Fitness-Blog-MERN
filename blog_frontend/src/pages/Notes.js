import React, { useEffect, useContext, useState, useRef } from "react";
import { useHistory } from "react-router";
import noteContext from "./context/noteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

const Notes = ({showAlert}) => {
  const context = useContext(noteContext);
  const { data, getNotes, updateNote } = context;
  let history = useHistory();

  const [note, setNote] = useState({ id: "", etitle: "", edescription: "" });

  const editNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      history.push("/login"); //if not login redirect to login page and not in schedule your workout page
    }
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);

  const handleClick = (e) => {
    updateNote(note.id, note.etitle, note.edescription);
    refClose.current.click();
    showAlert("Note updated", "success")
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="row my-3">
      <AddNote showAlert={showAlert}/>

      {/* update modal start */}

      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleClick}
                className="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* update modal end */}

      {data.length === 0 && "No notes to display"}
      {data.map((note, _id) => {
        return <NoteItem key={_id} editNote={editNote} note={note} showAlert={showAlert}/>;
      })}
    </div>
  );
};

export default Notes;
