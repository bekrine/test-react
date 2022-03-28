import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login({ login }) {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const OnSub = (data) => {
    login(data);
    navigate("/posts");
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(OnSub)}>
        <div>
          <label htmlFor="email">email</label>
        </div>
        <input
          type="email"
          {...register("email", { required: "requierd field" })}
          placeholder="email@example.com"
        />
        <p className="error">{errors.email && errors.email.message}</p>
        <div>
          <label htmlFor="password">Password</label>
        </div>
        <input
          type="password"
          {...register("password", {
            required: "requierd field",
            minLength: {
              value: 6,
              message: "min lenght is 6",
            },
          })}
          placeholder="password"
        />
        <p className="error">{errors.password && errors.password.message}</p>

        <div>
          <button className="btn_submit" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
