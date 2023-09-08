import React, { Component } from "react";

import "./App.css";
import Register from "./Components/Register";
import Login from "./Components/Login";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChYV14tvXg5ZySCRAD5HCLQe4MOs4mcnM",
  authDomain: "fs-survey.firebaseapp.com",
  databaseURL: "https://fs-survey-default-rtdb.firebaseio.com",
  projectId: "fs-survey",
  storageBucket: "fs-survey.appspot.com",
  messagingSenderId: "417398510873",
  appId: "1:417398510873:web:1ffe708df51656052a2188",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //page =0 (login) & page=1 (Regiatration)
      page: 1,
      message: "",
      //page = 1 (success) & page = 0 (danger)
      type: 1,
    };
  }
  pageSwitchHandler = (e) => {
    this.setState({ page: !this.state.page, message: null });
    e.preventDefault();
  };
  RegistrationHandler = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    if (password !== confirmPassword) {
      this.setState({ message: "Password does not match", type: 0 });
      return;
    }
    const auth = firebase.auth();
    const authPromise = auth.createUserWithEmailAndPassword(email, password);
    authPromise
      .then((data) => {
        auth.currentUser.sendEmailVerification();
        this.setState({ message: "Registed successfully", type: 1 }, () => {
          event.target.email.value = "";
          event.target.password.value = "";
          event.target.confirmPassword.value = "";
        });
      })
      .catch((error) => {
        this.setState({ message: error.message, type: 0 });
      });
  };
  LoginHandler = (event) => {
    event.preventDefault();
    const auth = firebase.auth();
    const email = event.target.email.value;
    const password = event.target.password.value;
    auth
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        if (data.user.email === true) {
          this.setState({ message: "Login successfully", type: 1 });
        } else {
          this.setState({
            message: " your email is not verified yet",
            type: 0,
          });
        }
      })
      .catch((error) => {
        this.setState({ message: error.message, type: 0 });
      });
  };
  render() {
    return (
      <div>
        {this.state.page ? (
          <Register
            type={this.state.type}
            message={this.state.message}
            switch={this.pageSwitchHandler}
            register={this.RegistrationHandler}
          />
        ) : (
          <Login
            switch={this.pageSwitchHandler}
            login={this.LoginHandler}
            message={this.state.message}
          />
        )}
      </div>
    );
  }
}

export default App;
