import React, { useState } from 'react';
import EditModal from "./EditModal";
import Form from "./Form";
import Notes from "./Notes";

function Home() {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [notes, setNotes] = useState(getNotesFromLs);
    const [editid, setEditid] = useState("");
    // console.log(notes);
  
    localStorage.setItem("notes", JSON.stringify(notes));

  return (
    <>
    <EditModal editid={editid} notes={notes} setNotes={setNotes} />
      <Form
        title={title}
        setTitle={setTitle}
        desc={desc}
        setDesc={setDesc}
        notes={notes}
        setNotes={setNotes}
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h1 className="mb-3">Your Notes</h1>
            {notes.length === 0 ? (
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Message:</h5>
                  <p className="card-text">No notes are available</p>
                </div>
              </div>
            ) : (
              notes.map((element) => {
                return (
                  <Notes
                    element={element}
                    key={element.id}
                    notes={notes}
                    setNotes={setNotes}
                    setEditid={setEditid}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
     
    </>
  )
// get local storage
function getNotesFromLs() {
    const note = JSON.parse(localStorage.getItem("notes"));
    if (note) {
      return note;
    } else {
      return [];
    }
  }

}

export default Home;