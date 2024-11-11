import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import { useState } from "react";

const Register = () => {
  const [loginStat, setLoginStat] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const regex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/;
  
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    const name = e.target.name.value;
    if(!regex.test(pass)){
      setErrorMsg("Password doesn't match the requirements")
      return
    }

    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        console.log(result.user);
        setLoginStat(true);
      })
      .catch((error) => {
        setLoginStat(false);
        setErrorMsg(error.message);
      });
  };
  return (
    <div class="hero bg-base-200 min-h-screen">
      <div class="hero-content flex-col">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Sign Up Now</h1>
        </div>
        <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                class="input input-bordered"
                required
              />
            </div>
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
              <input
                type="submit"
                value="Login"
                className="btn btn-md bg-green-400"
              />
            </div>
          </form>
          {<p className="text-error text-center">{errorMsg}</p>}
          {loginStat && navigate("/dashboard")}

          <p className="my-4 mx-5 text-center">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
