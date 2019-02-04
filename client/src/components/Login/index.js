import React from "react";
import Footer from "../Footer";
import "./style.css";


function Login() {
    return (
        <div className="container-login">
            <div className="login-header">
                <h1>Welcome Back</h1>
            </div>
        <div className="whole-form">
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email: example_name@email.com" />
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Type Your Password" />
        </div>
        
        <a id="no-hover" href="/game"><button type="submit" id="submit-button" class="btn btn-primary">Submit</button></a>
        <br />
        <h4 id="register-login">
          Don't have an account?{" "}
          <a href="/login" id="signup-link">
            Sign up now
          </a>
        </h4>
        </div>
        <Footer />
        </div>
    );
  }
export default Login;