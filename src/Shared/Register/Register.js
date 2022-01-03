import { LinearProgress, Stack } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { registerUser, isLoading } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const history = useHistory();

  const onSubmit = (data) => {
    registerUser(data.email, data.password, history, data.name);
    reset();
  };

  return (
    <>
     
      <div className="login" style={{ textAlign: "center", paddingTop: "8%", color: "white" }}>
        {isLoading && (
          <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
            <LinearProgress color="secondary" />
          </Stack>
        )}
        <div
          style={{
            margin: "50px 0  auto",
            display: "inline-block",
            boxShadow: "inset 1px 1px 10px rgb(255,255,255,0.2)",
            padding: "50px 20px",
          }}
        >
          <img style={{ width: "250px" }} src="https://image.freepik.com/free-vector/isometric-data-protection-concept-with-parent-child-login-window-lock-3d_1284-63713.jpg" alt="" />
          <h2 className="mb-5">Register New Account</h2>
          {!isLoading && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <input placeholder="First Name" style={{ fontSize: "15px", padding: "8px"}} {...register("name")} type="text" /> <br/><br/>
              <input placeholder="Last Name" style={{ fontSize: "15px", padding: "8px" }} {...register("name")} type="text" /> <br/><br/>
              <input placeholder="Addres" style={{ fontSize: "15px", padding: "8px" }} {...register("name")} type="text" /> <br/><br/>
              <input placeholder="Country" style={{ fontSize: "15px", padding: "8px" }} {...register("name")} type="text" /> <br/><br/>
              <input placeholder="Region" style={{ fontSize: "15px", padding: "8px" }} {...register("name")} type="text" /> <br/><br/>
              <input placeholder="Email" style={{ fontSize: "15px", padding: "8px" }} {...register("email")} type="email" /> <br/><br/>
              <input placeholder="Password" style={{ fontSize: "15px", padding: "8px" }} {...register("password")} type="password" /><br/><br/>
              <input
                style={{ fontSize: "18px", padding: "10px", background: "#EC5990", border: "none", color: "white", cursor: "pointer", borderRadius: "5px" }}
                value="CONTINUE"
                type="submit"
              />
            </form>
          )}

          <div>
            <p>
            <span style={{ color: "black", textDecoration: "none" }}>Already have an account?</span>
              <NavLink style={{ color: "#EC5990", textDecoration: "none" }} to="/login">
                {" "}
                Please Login
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
