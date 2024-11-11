import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { Link} from "react-router-dom";
import auth from "../firebase.init";
import { useState } from "react";

const Register = () => {
  const [loginStat, setLoginStat] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg,setSuccessMsg]=useState('')
  const regex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/;

 
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    const name = e.target.name.value;
    const terms=e.target.terms.checked;
    if(!regex.test(pass)){
      setErrorMsg("Password doesn't match the requirements")
      return
    }
    if(!terms){
      setErrorMsg('Please Accept Terms and Conditions')
      return
    }
    setErrorMsg('')
    setSuccessMsg('')

    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        
        setLoginStat(true);
        sendEmailVerification(auth.currentUser)
        .then(result=>{
          setSuccessMsg('Email Verification link is sent')
        })
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
            <div class="form-control">
              <label class="cursor-pointer label flex justify-start space-x-4">
                <input
                  type="checkbox"
                  name="terms"
                  class="checkbox checkbox-success"
                />
                <span class="label-text">
                  Please Accept Our Terms and Conditions
                </span>
              </label>
            </div>
            <div class="form-control mt-6">
              <input
                type="submit"
                value="Create Account"
                className="btn btn-md bg-green-400"
              />
            </div>
          </form>
          {<p className="text-error text-center">{errorMsg}</p>}
          {loginStat && <p className="text-green-500 text-center">{successMsg}</p>}

          <p className="my-4 mx-5 text-center">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
