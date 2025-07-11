import React from "react";
import { Link } from "react-router-dom";

function Register() {

    
  return (
    <div className="d-flex justify-content-center align-items-center h-100" style={{ height: "100vh" }}>
      <div className="bg-white p-4 rounded shadow w-50 mt-5" style={{ maxWidth: "400px", width: "100%",height: "80vh" }}>
        <h3 className="text-center mb-4">Register</h3>

        <form className="text-center">
          <div className="form-group mx-auto d-block text-start mb-1 mb-3">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username"   />
          </div>

          <div className="form-group mb-3 d-block text-start mb-1">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email"  />
          </div>

          <div className="form-group mb-4 d-block text-start mb-1">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password"   />
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-3">Register</button>
        </form>

        <p className="text-center">
          Already a member? <a href="/Signin">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
