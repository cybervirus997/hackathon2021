import React, { useState } from "react";
import styles from "./sign.module.css";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
// import { FcGoogle } from "react-icons/fc";
// import { FaApple } from "react-icons/fa";
// import { FaRegCompass } from "react-icons/fa";
import axios from "axios";
import { display } from "@mui/system";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  const classes = useStyles();
  const [error, setError] = useState(false);
  const [errorData, setErrorData] = useState("");
  const [input, setInput] = useState({
    pickupCity: "",
    dropCity: "",
    Truck: "",
    KM: ""
  });

  // const handlePayload = (e) => {
  //   let { name, value } = e.target;
  //   setInput({ ...input, [name]: value });
  // };

  // const handleRegister = () => {
  //   console.log(input);
  //   setInput({
  //     pickupCity: "",
  //   dropCity: "",
  //   Truck: "",
  //   });

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
          {/* <input
              name="pickCity"
              value={input.pcity}
              className={classes.email}
              type="text"
              placeholder="Enter Pickup City"
            /> */}
            <select style={{margin: "10px 0 10px 0"}}
            className={classes.email}
            >
              <option>Select Pickup Location</option>
              <option>Pune, Maharashtra, India</option>
              <option>Mumbai, Maharashtra, India</option>
              <option>Jabalpur, Madhyapradesh, India</option>
              <option>Jaipur, Rajashtan, India</option>
              <option>Indore, Madhyapradesh, India</option>
              <option>Puri, Odisa, India</option>
              <option>Banglore, Karnataka, India</option>
              <option>Delhi, India</option>



            </select>
            {/* <input
              className={classes.email}
              value={input.dCity}
              type="text"
              name="dropCity"
              placeholder="Enter Drop City"
            /> */}
            <select style={{margin: "10px 0 10px 0"}}
            className={classes.email}
            >
              <option>Select Drop Location</option>
              <option>Pune, Maharashtra, India</option>
              <option>Mumbai, Maharashtra, India</option>
              <option>Jabalpur, Madhyapradesh, India</option>
              <option>Jaipur, Rajashtan, India</option>
              <option>Indore, Madhyapradesh, India</option>
              <option>Puri, Odisa, India</option>
              <option>Banglore, Karnataka, India</option>
              <option>Delhi, India</option>



            </select>
            {/* <input
              className={classes.email}
              value={input.dKm}
              type="text"
              name="kilometer"
              placeholder="Enter Distance in KM"
            /> */}
            <select style={{margin: "10px 0 10px 0"}}
            className={classes.email}
            >
              <option>Select Truck Type</option>
              <option>Truck1</option>
              <option>Truck2</option>
            </select>
          </div>
        </form>
        <Button
          className={classes.buton}
          variant="contained"
        >
          Check Fare
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

        <div style={{ textAlign: "center"}}>
          <div className={styles.sig_botm}>
            <Button style={{backgroundColor:"green"}}
          className={classes.buton}
          variant="contained"
        >
          Shareकरो
        </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
