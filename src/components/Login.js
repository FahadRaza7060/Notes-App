import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const [data, setdata] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth);

  console.log({ userData });

  useEffect(() => {
    if (userData.user?.authtoken) {
      let path = "/";
      navigate(path);
    }
  }, [userData]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const y = dispatch(login({ email, password }));
    // console.log("y.payload",y.payload)
    // const token = y.payload.token;
    console.log("token: ", y);
    // setdata(token);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <h1 className="text-center my-3">Login</h1>
      <div className="container my-3">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
