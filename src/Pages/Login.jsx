import React from "react";
import { Link } from "react-router-dom";


const Login = () => {
    const handleLogin=e=>{
        e.preventDefault()
        const email=e.target.email.value
        const pass=e.target.pass.value
        console.log(email,pass)
    } 
  return (
    <div class="hero bg-base-200 min-h-screen">
      <div class="hero-content flex-col">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Login now!</h1>
        </div>
        <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} class="card-body">
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
                type="password"
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
          </form>

          <p className="my-4 mx-5 text-center">New User? Please <Link to='/register'>Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
