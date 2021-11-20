import React, { useState } from "react";
import styles from "./sign.module.css";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
// import { FcGoogle } from "react-icons/fc";
// import { FaApple } from "react-icons/fa";
// import { FaRegCompass } from "react-icons/fa";
import axios from "axios";
import { display } from "@mui/system";
import { Link, useHistory } from "react-router-dom";

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

  const [overlay,setOverlay] = useState(false);
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


  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [goods,setGoods]=useState("")

  const handleSinglePerson = () => {
    setOverlay(!overlay);
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
      <div className={styles.upper}>
        <form>
        
          <div className={classes.inputBoxes}>

          {/* Input area for District/place (From)  starts*/}
            <select style={{ margin: "10px 0 10px 0" }} className={classes.email} onChange={(e)=>setFrom(e.target.value)} >
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
          {/* Input area for District/place (From)  ends*/}
            
          {/*Input area for District/place (To)  starts  */}
          <select style={{margin: "10px 0 10px 0"}} className={classes.email} onChange={(e)=>setTo(e.target.value)} >
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
          {/*Input area for District/place (To)  ends*/}

          {/*Input area for Goods Type starts */}
          <select style={{margin: "10px 0 10px 0"}} className={classes.email} onChange={(e)=>setGoods(e.target.value)}>
              <option>Select Goods Type</option>
              <option>Industrial Machine</option>
              <option>Fresh fruits and Veggies</option>
              <option>Books/Stationery/Toys/Gifts</option>
              <option>Parcel and Courier Service</option>
            </select>
          {/*Input area for Goods Type ends */}
            
          </div>
        </form>

        <Button className={classes.buton} variant="contained"  onClick={handleSinglePerson}>
          Direct Booking
        </Button>

        <div className={styles.divide}>
          <div className={styles.lin}></div>
          <div className={styles.lin}></div>
        </div>

        <div style={{ textAlign: "center"}}>
          <div className={styles.sig_botm}>
            <Link to="/sharekro" style={{
              textDecoration: "none",
              width: "100%"
            }}>
            <Button style={{backgroundColor:"#00CF35"}} className={classes.buton} variant="contained">
                Shareकरो
            </Button>
            </Link>
          </div>
        </div>
      </div>


    {/* overlay starts */}

      {overlay ? <div style={{position: 'absolute',width: '100vw',display:"flex",flexFlow:"row",height: '91vh',backgroundColor:"#688983",left:"0",bottom:"0"}}>
        
        <div style={{width:"50%",height:"100%"}}>
          <div style={{width:"85%",height:"80%",margin:"auto",position:"relative",marginTop:"30px",backgroundColor:"#fff"}}>
            
              <p>From: {from}  <span>.......</span> to: {to}</p>
              <p>Types of goods : {goods}</p>

              {/* carasole starts */}
            <div style={{width:"80%",position:"relative",height:"40%",border:"1px solid red",margin:"auto"}}>

              <div style={{ position: "absolute", left: "0", top: "50%" ,border:"1px solid red"}}>left</div>
              
              <div style={{ width: "100%", height: "100%",display: "flex",flexFlow:"row"}}>

                <div style={{ height: "80%",marginLeft:"2%",marginTop:"4%",width:"40%",border:"1px solid red"}}>
                  {/* truck image */}
                </div>

                <div style={{ height: "80%",marginLeft:"2%",marginTop:"4%",width:"53%",border:"1px solid red"}}>
                  
                  <p>Truck name : { }</p>
                  <p>Truck Name Plate: { }</p>
                  <p> Capacity : { }</p>
                  <button>Select this truck</button>

                </div>

              </div>
              
              <div style={{position:"absolute",right:"0",top:"50%",border:"1px solid red"}}>right</div>

            </div>
            {/* carasole ennds */}

            <p>price: {}</p>

          </div>
        </div>
        <div style={{width:"50%",height:"100%",backgroundColor:"#161B22"}}>
          <div style={{width:"80%",height:"80%",border:"2px solid red",margin:"auto",marginTop:"30px"}}>
            {/* map lgega yhn */}
          </div>
        </div>

        <button style={{ position: "absolute",border:"1px solid transparent",outline: "none",backgroundColor:"rgb(0,207,53)", width: "250px", height: "60px", bottom: "19%", left: "15%" }}>
          <span style={{fontSize: "23px"}} >Payment</span>
        </button>

      </div> : ""}

    {/* overlay ends */}

    </div>
  );
}
