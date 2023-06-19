import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/UserContext";

const Login = () => {
  const { singIn,singInWithGoogle } = useContext(AuthContext);

  const navigate =useNavigate()

  const handleSingIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    singIn(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        navigate('/');
      })
      .catch((err) => {
        console.error(err)
      })
    }
  const handleGoogleSingIn=()=>{
    singInWithGoogle()
    .then((result) => {
      const user = result.user
      console.log("🚀 ~ file: Register.js:20 ~ .then ~ user:", user)
    })
    .catch(err => {
      console.error(err)
    })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <form onSubmit={handleSingIn} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-2xl">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-2xl">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
              />
              <label className="label">
                <NavLink className="label-text-alt link link-hover font-semibold text-xl">
                  Forgot password?
                </NavLink>
              </label>
              <label className="label">
                <NavLink
                  to="/register"
                  className="label-text-alt link link-hover font-semibold text-base">
                  Don't have an account? Create one
                </NavLink>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
        <button onClick={handleGoogleSingIn} className="btn btn-primary">Google</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
