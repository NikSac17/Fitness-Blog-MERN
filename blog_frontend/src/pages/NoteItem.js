import React, { useEffect, useState } from "react";

const NoteItem = ({ data, getNotes }) => {
  
  return (
    <div>
      <h1>NoteItem</h1>
      {data.length !== 0 ? (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.description}</p>
          </div>
        </div>
      ) : (
        "No notes to display"
      )}
    </div>
  );
};

export default NoteItem;
