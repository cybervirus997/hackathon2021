import React, { useState,useEffect } from "react";
import styles from "./sign.module.css";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
// import { FcGoogle } from "react-icons/fc";
// import { FaApple } from "react-icons/fa";
// import { FaRegCompass } from "react-icons/fa";
import axios from "axios";


import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setLoggedInUser, storeToken } from "../../../Redux/action";

const useStyles = makeStyles((theme) => ({
  buton: {
    width: "100%",
    textTransform: "none",
    background: "rgb(0,184,255)",
    fontSize: "16px",
    padding: "10px 0px",
    fontWeight: "600",
    marginTop: "12px",
    lineHeight: "1.5",
    "&:hover": {
      background: "rgb(0,184,255)",
    },
  },

  buton1: {
    width: "100%",
    textTransform: "none",
    background: "rgb(0,207,53)",
    padding: "10px 0px",
    fontSize: "16px",
    fontWeight: "600",
    marginTop: "12px",
    lineHeight: "1.5",
    "&:hover": {
      background: "rgb(0,207,53)",
    },
  },
  inputBoxes: {
    "& input": {
      marginTop: "10px",
    },
  },
  email: {
    width: "100%",
    border: "none",
    outline: "none",
    padding: "15px 0px",
    textIndent: "10px",
    fontSize: "1.0em",
    minWidth: "250px",
    borderRadius: "2px",
    backgroundColor: "white",
  },
  tnc: {
    color: "white",
    fontSize: "small",
  },
  buton3: {
    width: "100%",
    textTransform: "none",
    background: "white",
    fontSize: "16px",
    padding: "10px 0px",
    fontWeight: "600",
    marginTop: "12px",
    lineHeight: "1.5",
    "&:hover": {
      background: "white",
    },
  },
}));
export default function SignUp() {
  const classes = useStyles();
  const history = useHistory();
  const [error, setError] = useState(false);
  const [errorData, setErrorData] = useState("");
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    location: "",
    userRoles: "",
  });
  const loggedIn = useSelector(state => state.loggedIn);
  const dispatch = useDispatch();
  
  const handlePayload = (e) => {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

   const handleRegister = () => {
    axios.post("http://localhost:3009/signup", input)
      .then((data) => {
        dispatch(storeToken(data.data));
        dispatch(setLoggedInUser(data.data.user));
        console.log("pushing to home")
      })
      .catch((err) => {
        alert("Signup not successful")
    })
  }


  useEffect(() => {
    if (loggedIn) {
      alert("sucessfully done")
      history.push("/home")                                // to be filled important
    }
  },[handleRegister])

  

 


  return (
    <div className={styles.main_sign}>
      <div className={error ? styles.ErrorBox : styles.errorBoxHide}>
        <div>
          {/* <img src={ErrorSign_Signin} alt="" /> */}
          <h2>There Was a Problem</h2>
        </div>
        <div>
          <p>{errorData}</p>
        </div>
      </div>
      <div className={styles.upper}>
        <form>
        
          <div className={classes.inputBoxes}>
          <input
              name="name"
              value={input.name}
              className={classes.email}
              type="text"
              placeholder="Full name"
              onChange={handlePayload}
            />
            <input
              className={classes.email}
              value={input.email}
              type="email"
              name="email"
              placeholder="Email"
              onChange={handlePayload}
            />

            <input
              value={input.password}
              className={classes.email}
              name="password"
              type="password"
              placeholder="Password"
              onChange={handlePayload}
            />
            <input
              name="username"
              value={input.username}
              className={classes.email}
              type="text"
              placeholder="user name"
              onChange={handlePayload}
            />
            <input
              name="location"
              value={input.location}
              className={classes.email}
              type="text"
              placeholder="Enter Location"
              onChange={handlePayload}
            />
            <input
              name="userRoles"
              value={input.userRoles}
              className={classes.email}
              type="text"
              placeholder="Enter userRoles"
              onChange={handlePayload}
            />
          </div>
        </form>
        <Button
          className={classes.buton}
          variant="contained"
          onClick={handleRegister}
        >
          Sign up
        </Button>

        <div className={styles.divide}>
          <div className={styles.lin}></div>

          <div className={styles.lin}></div>
        </div>

        {/* <Button
                    style={{backgroundColor:"white", color:"black", fontWeight: "550", marginBottom : "10px"}}
                  className={classes.buton3}
                  variant="contained"
          startIcon={<FcGoogle />}
          onClick={()=>handleGoogleAuth()}
        >
          Continue with Google
        </Button> */}

        {/* <Button
                  style={{backgroundColor:"white", color:"black", fontWeight: "550"}}
          className={classes.buton3}
          variant="contained"
          startIcon={<FaApple />}
        >
          Continue with Apple
        </Button> */}

        <div style={{ textAlign: "center", marginLeft: "15%" }}>
          <div className={styles.sig_botm}>
            {/* <span style={{ fontSize: "20px", height: "18px" }}>
              {" "}
              <FaRegCompass />
            </span> */}

            {/* <span>Here's what's trending</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}
