import React from "react";
import { Link } from "react-router-dom";

function Signin() {
  return <div> 


       <div  className="d-flex justify-content-center align-items-center h-100 "style={{ height: "100vh", }} >

         <div className="bg-white p-4 rounded shadow w-50 mt-5" style={{ maxWidth: "400px", width: "100%",height: "80vh" }}> 

         <form  className="text-center">
             <div className=" mt-4 mb-3 text-center">
                 <h1 className="mb-4">Login</h1>
               <div className="form-group mx-auto mb-5" style={{ maxWidth: "400px" }}>
               <label className="d-block text-start mb-1" htmlFor="email">
               Email
               </label>
           <input type="email" className="form-control" id="email"/>
             <label className="d-block text-start mb-1" htmlFor="password">
             Password
           </label>
           <input type="password"  className="form-control" id="password"/>
     </div>
</div>

      <div className="fw-bold mt-4 mb-5 d-flex flex-column justify-content-between" style={{ maxWidth: "400px", margin: "0 auto" }}>
        <button className="w-100 btn btn-primary mb-3">Login</button>
         <button className="btn btn-primary w-100" style={{
             backgroundColor: "#8881C3",  
             borderColor: "#8881C3",}}>
            GUEST user
          </button>
     </div>
  </form>
        <h5>Not a member yet?<a href="/register">Register</a></h5> 
 </div>

</div>

  </div>;
}

export default Signin;
