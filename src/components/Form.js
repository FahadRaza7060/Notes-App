import React from "react";

function Form({ title, setTitle, desc, setDesc, notes, setNotes }) {
  
    const inputHandler = (event) => {

   if (event.target.id === "title") {
      setTitle(event.target.value);
    } else {
      setDesc(event.target.value);
    }
    // console.log(title, desc);
  };

const addNotesHandler = (event) => {
    event.preventDefault();
    if(title!== "" && desc!== "") {
    setNotes((note) => {
       return( 
        [...note, {
          title: title,
          desc: desc,
          id: new Date().getTime(),
        }]
    )
    })
}
    setTitle('');
    setDesc('');
}

  return (
    <>
      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <form
              style={{border: "2px solid #ced4da", borderRadius: "10px", padding: "30px",}} >
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Title"
                  value={title}
                  onChange={inputHandler}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Description
                </label>
                <textarea
                  id="desc"
                  rows="3"
                  className="form-control"
                  placeholder="Enter Your Description"
                  value={desc}
                  onChange={inputHandler} 
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" onClick={addNotesHandler} >
                Add Notes
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
