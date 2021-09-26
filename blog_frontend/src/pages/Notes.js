import React, { useEffect, useContext } from "react";
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
  },[])

  return (
    <div className="row my-3">
      <AddNote />
      
      {data.length===0 && "No notes to display"}
      {data.map((note,_id)=>{
          return <NoteItem key={_id} note={note}/>
      })}
    </div>
  );
};

export default Notes;
