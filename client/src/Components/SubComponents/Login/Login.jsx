import React, { useState } from "react";
import styles from "./sign.module.css";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
// import { FcGoogle } from "react-icons/fc";
// import { FaApple } from "react-icons/fa";
// import { FaRegCompass } from "react-icons/fa";
import axios from "axios";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  buton: {
    width: "100%",
    textTransform: "none",
    background: "rgb(0,207,53)",
    fontSize: "16px",
    padding: "10px 0px",
    fontWeight: "600",
    marginTop: "12px",
    lineHeight: "1.5",
    "&:hover": {
      background: "rgb(0,207,53)",
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
  tnc:{
    color:'white',
    fontSize:'small',
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
    email: "",
    password: "",
    bloName: "",
  });


  const handlePayload = (e) => {
        let { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }

    const handleLogin = () => {
        console.log(input);
        setInput({
           email: "",
           password: "",
           blogName: "",
        });
      axios.post("http://localhost:2345/login", {
           input
      }).then((res) => {
            setError(false);
        localStorage.setItem(
        "tumblrUser",
        JSON.stringify({ auth: true, token: res.data.token })
        );
         history.push("/selectTags");
      }
      ).catch((err) => {
          setError(true);
          setErrorData("Invalid Credentials")
        });
    }

  return (
    <div className={styles.main_sign}>
       <div className={error ? styles.ErrorBox : styles.errorBoxHide} >
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
            <input className={classes.email} value={input.email} type="email" name="email" placeholder="Email" onChange={handlePayload} />

                      <input
                          className={classes.email}
                          value={input.password}
                          name = "password"
              type="password"
              placeholder="Password"
              onChange={handlePayload}
            />
          </div>  
        </form>
        <Button className={classes.buton} style={{background: "rgb(0,207,53)",}} variant="contained" onClick={()=>handleLogin()}>
          Login 
        </Button>

        <div className={styles.divide}>
          <div className={styles.lin}></div>

          <div className={styles.lin}></div>
        </div>

        <div style={{ textAlign: "center", marginLeft: "15%" }}>
          <div className={styles.sig_botm}>

            <span style={{marginLeft: "65px",}}>Forget Password</span>
          </div>
        </div>
      </div>
    </div>
  );
}