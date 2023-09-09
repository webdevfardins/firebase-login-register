import React from "react";
import "./Registration.css";
export default function Registration(props) {
  let msgClass = ["text-center"];
  if (props.type) {
    msgClass.push("text-success");
  } else {
    msgClass.push("text-danger");
  }
  return (
    <div>
      <div className="container">
        <div className="card bg-light">
          <article className="card-body mx-auto" style={{ width: "500px" }}>
            <h4 className="Card-title mt-3 text-center">Create Account</h4>
            <p className="text-center">Get started with your free account</p>
            <p className={msgClass.join(" ")}>{props.message}</p>
            <p>
              <a href=""onClick={props.google} className="btn btn-block btn-info">
                <i className="fab fa-twitter">Sigup via google</i>
              </a>
              <a href="" className="btn btn-block btn-primary">
                <i className="fab fa-facebook">sginup via facebook</i>
              </a>
            </p>
            <p className="divider-text">
              <span className="bg-light">OR</span>
            </p>
            <form onSubmit={props.register}>
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

              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-lock"></i>
                  </span>
                </div>
                <input
                  name="confirmPassword"
                  className="form-control"
                  placeholder="Repeat password"
                  type="password"
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  Create Account
                </button>
              </div>
              <p className="text-center">
                Have an account{" "}
                <a href="#" onClick={props.switch}>
                  Log in
                </a>
              </p>
            </form>
          </article>
        </div>
      </div>
    </div>
  );
}
