import React, { useState,useEffect } from "react";
import styles from  "../SubComponents/SignUp/sign.module.css"; 
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
// import { FcGoogle } from "react-icons/fc";
// import { FaApple } from "react-icons/fa";
// import { FaRegCompass } from "react-icons/fa";
import axios from "axios";


import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setLoggedInUser, storeToken } from "../../Redux/action";

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
export default function TextField({checkerClose}) {
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
  

  useEffect(() => {
    if (loggedIn) {
      history.push("")                                // to be filled important
    }
  },[])

  const handlePayload = (e) => {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleRegister = () => {
    checkerClose();
    console.log("hii")
    axios.post("http://localhost:3009/signup", input)
      .then((data) => {
        dispatch(storeToken(data.data));
        dispatch(setLoggedInUser(data.data.user));
        console.log("pushing to home")
        
      })
      .catch((err) => {
        alert(err)
    })
  }

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

      <div className={styles.upper} >
        <form>
        
          <div className={classes.inputBoxes}>
          <input
              name="title"
              value={input.name}
              className={classes.email}
              type="text"
              placeholder="Title"
              onChange={handlePayload}
            />
            <input
              className={classes.email}
              value={input.email}
              type="text"
              name="startPoint"
              placeholder="Start-Point"
              onChange={handlePayload}
            />
            <input
              value={input.password}
              className={classes.email}
              name="endPoint"
              type="text"
              placeholder="End-Point"
              onChange={handlePayload}
            />
            <input
              name="occupied"
              value={input.location}
              className={classes.email}
              type="text"
              placeholder="Occupied"
              onChange={handlePayload}
            />
             <select 
            className={classes.email}
            style={{margin: "10px 0 10px 0",
                    color: "#757575"
            }}
            >
              <option>Select Truck Type</option>
              <option>EICHER 17FT (5 TON)</option>
              <option>EICHER 17FT (5 TON)</option>
              <option>EICHER 19FT (7 TON)</option>
              <option>TATA TRUCK (10 TON)</option>
              <option>32FT CONTAINER (7 TON)</option>
              <option>32FT CONTAINER (14 TON)</option>
              <option>32 / 40 FEET OPEN TRAILER</option>
              <option>TAURUS (18 TON) N.A</option>
            </select>
          </div>
        </form>
        <Button
          className={classes.buton}
          variant="contained"
          onClick={handleRegister}
        >
          Request
        </Button>
      </div>
    </div>
  );
}
