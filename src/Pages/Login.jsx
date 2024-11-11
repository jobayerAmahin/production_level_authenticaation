import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";



const Login = () => {
  const [isVisible,setIsVisible]=useState(false)
    const handleLogin=e=>{
        e.preventDefault()
        const email=e.target.email.value
        const pass=e.target.pass.value
        
        signInWithEmailAndPassword(auth,email,pass)
        .then(result=>{
          console.log(result.user)
        })
        .catch(error=>{
          console.log("ERROR",error)
        })

    } 
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
                class="input input-bordered"
                required
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type={isVisible?'text':'password'}
                placeholder="password"
                name="pass"
                class="input input-bordered"
                required
              />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div class="form-control mt-6">
              <input type="submit" value="Login" className="btn btn-md bg-green-400" />
            </div>
            <button onClick={()=>setIsVisible(!isVisible)} className="absolute bottom-36 right-8 btn">
              
              {
                isVisible? <FaEyeSlash />: <FaEye />
              }
              </button>
          </form>

          <button className="my-4 mx-5 text-center">New User? Please <Link to='/register'>Sign Up</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Login;
