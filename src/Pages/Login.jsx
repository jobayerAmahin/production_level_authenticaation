import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [sMessage, setSMessage] = useState("");
  const [eMessage, setEMessage] = useState("");
  const emailResest=useRef()

  const handleResetEmail=()=>{
    const sentEmail=emailResest.current.value
    
    if(!sentEmail){
      setEMessage('Please provide your valid email')
      return
    }
    else{
      sendPasswordResetEmail(auth,sentEmail)
      .then(()=>{
        console.log('Reset Email is sent')
      })
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.pass.value;

    signInWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        console.log(result.user);
        if (!result.user.emailVerified) {
          
          setEMessage("Please Verify Your Email at first");
          return;
        } else {
          setLoginSuccess(true);
          setSMessage("Login Successfull");
        }
      })
      .catch((error) => {
        setEMessage(error);
        return
      });
  };
  return (
    <div class="hero bg-base-200 min-h-screen">
      <div class="hero-content flex-col">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Login now!</h1>
        </div>
        <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body relative">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                ref={emailResest}
                class="input input-bordered"
                required
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type={isVisible ? "text" : "password"}
                placeholder="password"
                name="pass"
                class="input input-bordered"
                required
              />
              <label class="label" onClick={handleResetEmail}>
                <a href="#" class="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div class="form-control mt-6">
              <input
                type="submit"
                value="Login"
                className="btn btn-md bg-green-400"
              />
            </div>

          </form>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="absolute bottom-48 right-8 btn"
          >
            {isVisible ? <FaEyeSlash /> : <FaEye />}
          </button>
          <div className="text-center">
            {
              loginSuccess? <p className="text-green-600">{sMessage}</p>: <p className="text-error">{eMessage}</p>
            }
          </div>
          <button className="my-4 mx-5 text-center">
            New User? Please <Link to="/register">Sign Up</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
