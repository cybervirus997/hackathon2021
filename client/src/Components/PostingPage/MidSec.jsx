import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from './PostTextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import ChatIcon from '@mui/icons-material/Chat';
import Button from '@mui/material/Button';
import PaymentIcon from '@mui/icons-material/Payment';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
    backgroundColor: "#00CF35"
  });

 
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: "white",
    fontWeight: "600",
    backgroundColor: "#00B8FF"
  }));

function MidSec(){

  const [open, setOpen] = useState(false);
  const [getData, setGetData] = useState([]);

  const [reviews,setReviews]=useState();
   const [posttt, setPossst] = useState();

  const [lazy,setLazy]=useState(false);
  
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const checkerClose = () => {
        setOpen(false);
  }
  
  const [refresh, setrefresh] = useState(true);
 

  const handleRefresh = () => {
    window.location.reload(false);
    setrefresh(!refresh)
  }

  const user = useSelector(state => state.loggedInUser);

  // useEffect(() => {
  //   axios.get("http://localhost:3009/post")
  //     .then((data) => {
  //       let xyz = (data.data).reverse();
  //       setGetData(xyz);
  //     })
  // },[handleRefresh])

  useEffect(() => {
    axios.get("http://localhost:3009/truck")
      .then((data) => {
        console.log(data)
      })
    axios.get("http://localhost:3009/post")
      .then((data) => {
        let xyz = (data.data).reverse();
        setGetData(xyz);
      })
  }, [])
  

  const handlePostREviews = () => {

    const reviewData = {
      postsId: posttt,
      commentTitle: reviews,
      userId: user._id,
      userName: user.username
    }

    axios.post("http://localhost:3009/comment", reviewData);

    window.location.reload(false);
  }

  return getData.length === 0 ? <div style={{ position: 'absolute', width: '100vw', height: '100%', backgroundColor: "white" }}></div> :  (
        <div style={{
            width: "200%",
        }} >
            <div style={{position: "absolute",width: "100vw",height: "90vh",top: "0px",left: "0px",backgroundColor: "white",overflowY: "scroll"}}>
                
          
                    {getData.map((el) => (
                      <div key={el.id}>

              <Card sx={{ display: 'flex' }} style={{ border: '1px solid black'}}>
                          <Box sx={{ display: 'flex', flexDirection: 'row', }}>
                            <div style={{ width:"400px",marginLeft:"20px",height:"100%",justifyContent: 'start'}}>
                              <img src={el.truckId.truckImage}alt="Truck_Image" width="100%" />
                            </div>
                  <CardContent style={{width: "500px"}}>
                    <Typography component="div" variant="h6" style={{ width: "30%" ,marginLeft:"30%"}}>
                    <Stack direction="row" spacing={2}  >
                      <Item>{el.startPoint}</Item>
                      <span style={{color: "#00CF35" ,width:"100%"}}>to</span>
                      <Item>{el.endPoint}</Item>
                    </Stack>            
                    </Typography>
                    <Box sx={{ marginTop: "10%",width:"1000px",display: "flex", flexDirection: "row", gap:"7%"}}>
                        
                      <div style = {{width: "400px"}}>
                          <Typography variant="subtitle1" color="text.secondary" component="div" style={{fontWeight: "600",width: "auto"}}>
                            User Details
                          </Typography>
                            <div style={{}}>
                                <Typography variant="body2" gutterBottom>
                                      <span style={{ fontWeight: "600", marginRight: "2%" }}>Name</span> {el.userId.name}
                                  </Typography>
                                  <Typography variant="body2" gutterBottom>
                                  <span style={{fontWeight: "600",marginRight: "2%"}}>Email</span> {el.userId.email}
                                  </Typography>
                                  <Typography variant="body2" gutterBottom>
                                  <span style={{fontWeight: "600",marginRight: "2%"}}>Location</span> {el.userId.location}
                                  </Typography>
                            </div>
                      </div>
                      <div style={{width:"400px"}}>
                        <Typography variant="subtitle1" color="text.secondary" component="div" style={{fontWeight: "600", width: "auto"}}>
                          Truck Details
                        </Typography>
                          <div style={{ marginLeft: "2%"}}>
                              <Typography variant="body2" gutterBottom>
                                <span style={{ fontWeight: "600", marginRight: "2%"}}>Type</span> {el.truckId.truckName}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                <span style={{fontWeight: "600", marginRight: "2%"}}>Number</span> {el.truckId.truckNumber}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                <span style={{fontWeight: "600",marginRight: "2%"}}>Space-Vacant</span> {el.truckId.capacity} %
                                </Typography>
                          </div>
                        </div>

                        <div style={{width:"500px" ,height:"200px",border:"1px solid black",top:"0",right:"0"}}>
                                  <h2>Reviews</h2>
                                  
                                  {el.comment.map((ele) => {
                                    return <div style={{width:"100%",overflowY:"scroll"}}>
                                      {ele.userName}          <br />
                                      {ele.commentTitle}
                                    </div>
                                  })}

                                  <div style={{ width: "100%",display: "flex",flexDirection: "row"}} >
                                    <input type="text" name="reviews" id="reviews" onChange={(e) => { setReviews(e.target.value); setPossst(el._id) }} style={{ width: "80%", border: "1px solid black" }} />
                                    <button onClick={handlePostREviews}  style={{ width: "20%"}}>Add</button>
                                  </div>
                                  
                                  

                      </div>         
                    </Box>

                    


                  </CardContent>
                  <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', pl: 1, pb: 1 }}>
                  <Link to="/chat">
                  <Button variant="contained" style={{
                    padding: "10% 0%",marginTop:"100%"
                  }}>
                    <ChatIcon />
                  </Button>
                  </Link>
                  <Link to="/payment">
                  <Button variant="contained" style={{
                    padding: "10% 0%",marginTop:"10px" ,backgroundColor:"green"
                  }}>
                    <PaymentIcon />
                  </Button>
                  </Link>
                  </Box>
                </Box>
              </Card>

                      </div>
                    )) }


            </div>
        <div>
          
          <StyledFab style={{position: 'absolute'}} aria-label="add" onClick={handleOpen}>
            <AddIcon />
          </StyledFab>

        

            

          <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
           >
            <Box sx={style} style={{
          backgroundColor: "#334257"
      }}>
            <Typography id="modal-modal-title" variant="h6" component="h2" style={{
                color: "white"
            }}>
               Request for sharing 
            </Typography>
            {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
                  <TextField checkerClose={checkerClose} loader={handleRefresh}/>
            </Box>
          </Modal>

          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            {/* <SearchIcon /> */}
          </IconButton>
          <IconButton color="inherit">
            {/* <MoreIcon /> */}
          </IconButton>

            </div>
        </div>
  )
    
}

export { MidSec };