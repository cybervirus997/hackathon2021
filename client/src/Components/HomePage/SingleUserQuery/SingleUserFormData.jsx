import React, { useEffect, useState } from "react";
import styles from "./sign.module.css";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import truck1 from "../../HomePage/truck1.png";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import { FcGoogle } from "react-icons/fc";
// import { FaApple } from "react-icons/fa";
// import { FaRegCompass } from "react-icons/fa";
import Map from '../../Map/Map';
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
export default function SingleUserFormData() {

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
  const [goods, setGoods] = useState("")
  
  const [truckData1, settruckData1] = useState([])
  const [pointer, setPointer] = useState(0)
  


  const handleSinglePerson = () => {
    setOverlay(!overlay);
  }

  const handleForward = () => {
    if (pointer < truckData1.length - 1) {
      setPointer(pointer + 1);
    } else {
      setPointer(0);
    }
  }
  const handleBackward = () => {
    if (pointer === 0) {
      setPointer(truckData1.length - 1);
    } else {
      setPointer(pointer-1);
    }
  }

  console.log(truckData1[pointer])

  const [booool,setbooool]=useState(true)

  const [loc1, setLoc1] = useState({})
  const [loc2, setLoc2] = useState({})
  

  const handleapi = () => {setbooool(!booool)}

  useEffect(() => {

  axios.get(`https://geocode.search.hereapi.com/v1/geocode?q=${from}&apiKey=s-qLXbBx3veMxxKkxZwxbQCPNNa_8up-J3YCAjDVIsk`)
    .then((data) => {
      setLoc1(data.data.items[0].position)
  })
  
  axios.get(`https://geocode.search.hereapi.com/v1/geocode?q=${to}&apiKey=s-qLXbBx3veMxxKkxZwxbQCPNNa_8up-J3YCAjDVIsk`)
    .then((data) => {
      setLoc2(data.data.items[0].position)
    })
    console.log("loc1", loc1)
    console.log("loc2", loc2)
  },[booool])


  useEffect(() => {
    axios.get("http://localhost:3009/truck")
      .then((data) => {
        settruckData1([...data.data])
      })
  }, [])
  

    function calcCrow(lat1, lon1, lat2, lon2) 
    {
      var R = 6371; // km
      var dLat = toRad(lat2-lat1);
      var dLon = toRad(lon2-lon1);
      var lat1 = toRad(lat1);
      var lat2 = toRad(lat2);

      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c;
      return d;
    }

    // Converts numeric degrees to radians
    function toRad(Value) 
    {
        return Value * Math.PI / 180;
    }

  let TotalDistance = calcCrow(loc1.lat, loc1.lng, loc2.lat, loc2.lng).toFixed(1);

  const handleBackToHome = () => {
    
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

        <button onClick={handleapi} style={{backgroundColor:"#334257" ,color:"white", border:"none" ,borderRadius:"4px"}} className={classes.buton}>Start tracking</button>
        
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

      {overlay ? <div style={{position: 'absolute',width: '100vw',display:"flex",flexFlow:"row",height: '90%',backgroundColor:"#688983",left:"0",bottom:"0"}}>
        
      

        <div style={{width:"50%",height:"100%"}}>
          <div style={{width:"85%",height:"80%",margin:"auto",position:"relative",marginTop:"30px",backgroundColor:"#688983", textAlign:"left" , padding: "10px", fontFamily: "Courier New"}}>
            
            <div style={{borderLeft: "5px solid #333333", paddingLeft: "10px", color: "#fff"}}>
              <p style={{fontSize:"22px"}}>From: <span style={{fontSize:"22px", fontWeight:"600", marginLeft: "98px", color:"#333333"}}>{from}</span><br/> to: <span style={{fontSize:"22px", fontWeight:"600", marginLeft: "123px", color:"#333333"}}>{to}</span></p>
              <p style={{marginBottom:"10px", fontSize: "22px"}}>Types of goods: <span style={{fontSize:"22px", fontWeight:"600", marginLeft: "10px", color:"#333333"}}>{goods}</span></p>

              </div>

            {/* carasole starts */}
            
            <div style={{width:"95%",position:"relative",height:"50%",margin:"auto",marginTop:"40px", backgroundColor:"white"}}>

              <div onClick={handleBackward}  style={{ position: "absolute", left: "0", top: "50%" }}>  <ArrowBackIosIcon/></div>
            
              
              <div style={{ width: "100%", height: "100%",display: "flex",flexFlow:"row"}}>

                <div style={{ height: "100%",marginLeft:"0%",marginTop:"0%",width:"50%"}}>
                  <div><img src={truckData1[pointer].truckImage} alt="tru" width="90%" height="100%"/></div>
                </div>

                <div style={{ height: "100%",width:"55%", backgroundColor:"#67806B",color:"#fff" }}>
                  
                  <h4 style={{marginLeft: "10px",marginTop: "15px"}}>Truck name : {truckData1[pointer].truckName}</h4>
                  <h4 style={{marginLeft: "10px",marginTop: "5px"}}>Truck Name Plate: {truckData1[pointer].truckNumber}</h4>
                  <h4 style={{marginLeft:"10px",marginTop: "5px"}}> Capacity : {truckData1[pointer].capacity} Tons </h4>
                  <Button style={{backgroundColor:"#396EB0", color:"#fff",marginTop:"60px",marginLeft:"53px"}}>Select this truck</Button>

                </div>

              </div>
              
              <div onClick={handleForward} style={{position:"absolute",right:"0",top:"50%"}}><ArrowForwardIosIcon/></div>

            </div> 
            
            {/* carasole ennds */}

            <p style={{marginTop:"30px",marginLeft:"11px",fontSize:"22px", color: "#fff"}}>Total Fare: Rs:{TotalDistance*20}/ only</p>

          </div>
        </div>
        <div style={{width:"50%",height:"100%",backgroundColor:"#161B22"}}>
          <div style={{width:"80%",height:"80%",margin:"auto",marginTop:"30px"}}>
           <Map lat1={loc1.lat} lon1={loc1.lng} lat2={loc2.lat} lon2={loc2.lng} />
          </div>
        </div>
        <Link to="/payment" style={{textDecoration:"none"}}>
        <Button style={{ position: "absolute",backgroundColor:"rgb(0,207,53)", width: "170px", height: "50px", bottom: "7%", left: "24%", color:"#fff", fontWeight:"600" }}>
          <span style={{fontSize: "20px"}} >Payment</span>
        </Button>
            </Link>
            <Link to="/home" style={{textDecoration:"none"}}>
        <Button onClick={handleBackToHome} style={{ position: "absolute",backgroundColor:"#396EB0", width: "170px", height: "50px", bottom: "7%", left: "12%", color:"#fff", fontWeight:"600" }}>
          <span style={{fontSize: "20px"}} > Back </span>
        </Button>
        </Link>
      </div> : ""}

    {/* overlay ends */}

    </div>
  );
}
