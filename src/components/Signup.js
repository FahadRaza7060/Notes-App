import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../slices/authSlice";

function Signup() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
 
  const onSubmit = (e) => {
   e.preventDefault();
   dispatch(register({ name, email, password }));
   setName("");
   setEmail("");
   setPassword("");
  }
  // console.log("onsubmit", onSubmit);

  return (
    <>
      <h1 className="text-center my-3">Signup</h1>
      <div className="container my-3">
      <form onSubmit={onSubmit}>
      <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)} aria-describedby="emailHelp" />
        </div>
      <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" 
          value={password}  onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary" >Signup</button>
      </form>
      </div>
    </>
  );
}

export default Signup;
