import React from "react";
import "./Registration.css";
function Login(props) {
  let msgClass = ["text-center"];
  if (props.type) {
    msgClass.push("text-success");
  } else {
    msgClass.push("text-danger");
  }
  
  return (
    <div className="container">
      <div className="card bg-light">
        <article className="card-body mx-auto" style={{ width: "500px" }}>
          <h4 className="Card-title mt-3 text-center">Login</h4>
          <p className={msgClass.join(" ")}>{props.message}</p>
          <p>
            <a href="" className="btn btn-block btn-social btn-twitter ">
              <i className=" fab fa-twitter me-2">Login via twitter</i>
            </a>
            <a href="" className="btn btn-block btn-facebook">
              <i className="fab fa-facebook">Login via facebook</i>
            </a>
          </p>
          <p className="divider-text">
            <span className="bg-light">OR</span>
          </p>
          <form onSubmit={props.login}>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-envelope"></i>
                </span>
              </div>
              <input
                name="email"
                className="form-control"
                placeholder="Email Address"
                type="email"
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <input
                name="password"
                className="form-control"
                placeholder="Password"
                type="password"
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>
            </div>
            <p className="text-center">
              <a href="#" onClick={props.switch}>
                Create{" "}
              </a>{" "}
              an account
            </p>
          </form>
        </article>
      </div>
    </div>
  );
}
export default Login;
