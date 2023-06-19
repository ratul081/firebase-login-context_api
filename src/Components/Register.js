import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/UserContext";

const Register = () => {
  const { createUser, singInWithGoogle } = useContext(AuthContext);
  const navigate =useNavigate()

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleGoogleSingIn = () => {
    singInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log("🚀 ~ file: Register.js:20 ~ .then ~ user:", user);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <form
        onSubmit={handleRegister}
        className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-2xl">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-2xl">Email</span>
            </label>
            <input
              type="text"
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
            <label className="label ">
              <div className="text-base">
                Already Have an account?
                <NavLink
                  to="/login"
                  className="label-text-alt link link-hover text-primary text-base">
                  {" "}
                  Log In
                </NavLink>
              </div>
            </label>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Signup
              </button>
            </div>
          </div>
        <button onClick={handleGoogleSingIn} className="btn btn-primary">
          Google
        </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
