import React from "react";
import logo from "../logo2.png";

function Signup() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "70vh", width: "70vw" }}
    >
      <div className="flex-column align-items-center" style={{ width: "30vw" }}>
        <div className="text-center">
          <img src={logo} alt="" style={{ width: "70px", height: "70px" }} />
        </div>
        <p
          className="text-center "
          style={{ fontSize: "30px", fontWeight: "400" }}
        >
          Signup
        </p>
        <form>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
            />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Handle" />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
