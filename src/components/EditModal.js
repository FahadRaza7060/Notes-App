import React from "react";

function EditModal({ editid, notes, setNotes }) {
    // console.log(editid);
  const updateHandler = () => {
    const updateNotes = notes.map((element) => {
      // console.log(elem);
      if (editid === element.id) {
       return ({ 
            ...element,
            title: document.getElementById("edittitle").value,
            desc: document.getElementById("editdesc").value,
       })
      } else {
        return element;
      }
    });

    // console.log( updateNotes);
    setNotes(updateNotes);
  };
  
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Notes
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form
                style={{
                  border: "2px solid #ced4da",
                  borderRadius: "10px",
                  padding: "30px",
                }}
              >
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edittitle"
                    placeholder="Enter Your Title"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Description
                  </label>
                  <textarea
                    name="desc"
                    id="editdesc"
                    rows="3"
                    className="form-control"
                    placeholder="Enter Your Description"
                  ></textarea>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={updateHandler}
              >
                Edit Notes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditModal;
