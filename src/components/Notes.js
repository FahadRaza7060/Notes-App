import React from "react";

function Notes({ element, notes, setNotes, setEditid }) {
  //   console.log(element);
  const removeHandler = (id) => {
    // console.log(id);
    // console.log(notes);
    const newNotes = notes.filter((element) => {
      if (element.id !== id) {
        return element;
      }
    });
    
    setNotes(newNotes);

  };

  const editHandler = (id) => {
    setEditid(id);
    notes.filter((element) => {
        if(element.id===id) {
          // this line of code give the title and desc in the modal when you click on the edit button by default
            document.getElementById('edittitle').value = element.title;
            document.getElementById('editdesc').value = element.desc;
        } 
    })
  }

  return (
    <>
      <div className="card mb-3">
        <div className="card-body" style={{ textTransform: "capitalize" }}>
          <h5 className="card-title"> {element.title} </h5>
          <p className="card-text"> {element.desc} </p>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => {
              editHandler(element.id);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger mx-2"
            onClick={() => {
              removeHandler(element.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Notes;
