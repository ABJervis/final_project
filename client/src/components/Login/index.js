import React from "react";
import Footer from "../Footer";
import "./style.css";


function Login() {
    return (
        <div className="container-login">
            <div className="login-header">
                <h1>Welcome Back</h1> <br /><br />
            </div>
             <div className="whole-form">
                <div className="form-group">
                    <div className="row">
                        <div className="col-sm-4">
                        <label for="exampleInputEmail1">Email address</label>
                         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email: example_name@email.com" />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-sm-4">
                        <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Type Your Password" />
                        </div>
                    </div>
                </div>
        
            </div>
            <Footer />

        </div>
    );
  }
export default Login;