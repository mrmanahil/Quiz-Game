import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/Actions/actions";

const Login = () => {
  const { register, handleSubmit, formState, reset } = useForm();

  const [showPass, setShowPass] = useState(false);

  const [Loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const login = (body) => {
    let data = {
      email: body.email,
      password: body.password,
    };
    console.log(data);
    dispatch(userLogin(data, reset, setLoading));
    console.log(data);
  };

  return (
    <>
      <div className="login_bg">
        <div className="logn_detail">
          <div className="title">
            <h3>Login</h3>
            <h5>Welcome Back</h5>
          </div>
          <form onSubmit={handleSubmit(login)}>
            <div className="form_field">
              <input
                placeholder="Username"
                {...register("email", { required: true })}
              />
              {formState.errors.email && (
                <span style={{ color: "red" }}>This field is required</span>
              )}
              <i class="fas fa-user-circle icon"></i>
            </div>
            <div className="form_field">
              {showPass ? (
                <input
                  placeholder="Password"
                  {...register("password", { required: true })}
                  type="text"
                />
              ) : (
                <input
                  placeholder="Password"
                  {...register("password", { required: true })}
                  type="password"
                />
              )}
              {formState.errors.password && (
                <span style={{ color: "red" }}>This field is required</span>
              )}
              <i className="fas fa-lock icon"></i>
              {showPass ? (
                <i
                  className="fas fa-eye eye"
                  onClick={() => setShowPass(false)}
                ></i>
              ) : (
                <i
                  className="fas fa-eye eye"
                  onClick={() => setShowPass(true)}
                ></i>
              )}
            </div>
            {Loading ? (
              <button type="submit" disabled>
                Logging In
              </button>
            ) : (
              <button type="submit">Log In</button>
            )}
            <p className="text_last">Putting People First, Profits Second</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
