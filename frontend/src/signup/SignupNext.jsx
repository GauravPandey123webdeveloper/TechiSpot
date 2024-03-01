import React from "react";
import signlogo from "../assets/signlogo.png";

import { Link } from "react-router-dom";
import styles from "./SignupNext.module.css";

export default function SignupNext() {
  function handleLogin(e) {
    e.preventDefault();
  }
  return (
    <div>
      <div className={styles.box}>
        <div className={styles.logobox}>
          <img src={signlogo} className={styles.logo} alt="Signin Logo" />
        </div>
        <div className={styles.inputbox}>
          <form action="">
            <input
              className={styles.email}
              type="email"
              placeholder="Email ID"
            />{" "}
            <br />
            <br />
            <input
              className={styles.pass}
              type="password"
              placeholder="Password"
            />{" "}
            <br />
            <br />
            <input
              className={styles.cpass}
              type="password"
              placeholder="Confirm Password"
            />{" "}
            <br />
            <div className={styles.buttnbox}>
              <button onClick={handleLogin} className={styles.buttn}>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
