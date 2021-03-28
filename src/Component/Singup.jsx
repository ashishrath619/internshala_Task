import React from "react";
import "./LoginCard.css";

function LoginCard() {
  return (
    <>
      <section className="login_card_container">
        <div className="login_card">
          <div>
            {" "}
            <h2>Sing up</h2>
          </div>
          <div className="signin_email_container">
            <label id="email" htmlFor="enter_email" placeholder="username">
              {" "}
              User name{" "}
            </label>
            <input type="email" name="signin_email" id="enter_email" />
          </div>
          <div className="signin_email_container">
            <label id="email" htmlFor="enter_email" placeholder="Email">
              {" "}
              Email Address{" "}
            </label>
            <input type="email" name="signin_email" id="enter_email" />
          </div>

          <div className="singnin_password_container">
            <label
              id="password"
              htmlFor="enter_password"
              placeholder="Password"
            >
              {" "}
              Password{" "}
            </label>
            <input type="password" name="signin_password" id="enter_password" />
          </div>

          <div className="remember_forgot_pass_container">
            <div className="remember_comtainer">
              <input
                type="checkbox"
                name="remember_me"
                id="remember_me_checkbox"
              />
              <h6> I accept the terms and condition </h6>
            </div>
          </div>

          <button> Sign up </button>
        </div>
      </section>
    </>
  );
}

export default LoginCard;
