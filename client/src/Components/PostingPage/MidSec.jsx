import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search'
import MoreIcon from '@mui/icons-material/MoreVert';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from './PostTextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import ChatIcon from '@mui/icons-material/Chat';
import Button from '@mui/material/Button';
import PaymentIcon from '@mui/icons-material/Payment';
import { Link } from "react-router-dom";
//import SignupPage from '../HomePage/Form/SignUpPage';
//import SignUP from '../SubComponents/SignUp/SignUP';
//import Paper from '@mui/material/Paper';

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

  const [open, setOpen] = React.useState(false);
  const [getData,setGetData]=useState([]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const checkerClose = () => {
        setOpen(false);
  }
  
  const [refresh, setrefresh] = useState(true);

  const handleRefresh = () => {
    setrefresh(!refresh)
  }

  useEffect(() => {
    axios.get("http://localhost:3009/post")
      .then((data) => {
        let xyz = (data.data).reverse();
        setGetData(xyz);
        console.log("posts:",data.data)
      })
  },[handleRefresh])

  useEffect(() => {
    axios.get("http://localhost:3009/truck")
      .then((data) => {
        console.log(data)
      })
    axios.get("http://localhost:3009/post")
      .then((data) => {
        let xyz = (data.data).reverse();
        setGetData(xyz);
        console.log("posts:",data.data)
      })
  },[])

    return (
        <div style={{
            width: "200%",
        }} >
            <div style={{
                    //  border: "4px solid green",
                    position: "absolute",
                    width: "153%",
                    height: "550px",
                    // padding: "2%",
                    top: "40px",
                    left: "150px",
                    backgroundColor: "white",
                    overflowY: "scroll"
                }}>
                
          
                    {getData.map((el) => (
                      <div key={el.id}>

              <Card sx={{ display: 'flex' }} style={{
                 boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
              }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', margin: "auto" }}>
                    <CardMedia
                      component="img"
                      sx={{ flex: '1 0 auto', width: 200 ,paddingRight: "12px" }}
                      image={el.truckId.truckImage}
                      alt="Truck_Image"
                    />
                  <CardContent style={{
                      // border: "1px solid green",
                    width: "500px"
                  }}>
                    <Typography component="div" variant="h6" style={{ 
                       width: "30%" ,marginLeft:"30%"
                    }}>
                    <Stack direction="row" spacing={2}  >
                      <Item>{el.startPoint}</Item>
                      <span style={{
                        color: "#00CF35" ,width:"100%"
                      }}>to</span>
                      <Item>{el.endPoint}</Item>
                    </Stack>            
                    </Typography>
                    <Box sx={{ marginTop: "10%", width: "200%",display: "flex", flexDirection: "row", gap:"7%"}}>
                        
                      <div style = {{
                        width: "200px",
                        // border: "4px solid green"
                        // margin: "auto"
                      }}>
                          <Typography variant="subtitle1" color="text.secondary" component="div" style={{
                            fontWeight: "600",
                            width: "auto"
                          }}>
                            User Details
                          </Typography>
                            <div style={{
                            }}>
                                <Typography variant="body2" gutterBottom>
                                    <span style={{
                                  fontWeight: "600",
                                  marginRight: "2%"
                                }}>Name</span> {el.userId.name}
                                  </Typography>
                                  <Typography variant="body2" gutterBottom>
                                  <span style={{
                                  fontWeight: "600",
                                  marginRight: "2%"
                                }}>Email</span> {el.userId.email}
                                  </Typography>
                                  <Typography variant="body2" gutterBottom>
                                  <span style={{
                                  fontWeight: "600",
                                  marginRight: "2%"
                                }}>Location</span> {el.userId.location}
                                  </Typography>
                            </div>
                      </div>
                      <div>
                        <Typography variant="subtitle1" color="text.secondary" component="div" style={{
                          fontWeight: "600",
                          width: "auto"
                        }}>
                          Truck Details
                        </Typography>
                          <div style={{
                            marginLeft: "2%"
                          }}>
                              <Typography variant="body2" gutterBottom>
                                <span style={{
                                  fontWeight: "600",
                                  marginRight: "2%"
                                }}>Type</span> {el.truckId.truckName}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                <span style={{
                                  fontWeight: "600",
                                  marginRight: "2%"
                                }}>Number</span> {el.truckId.truckNumber}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                <span style={{
                                  fontWeight: "600",
                                  marginRight: "2%"
                                }}>Space-Vacant</span> {el.truckId.capacity} %
                                </Typography>
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
            <AppBar position="absolute" sx={{ top: 'auto', bottom: 0 }} style={{
                width: "153%",
                left: "150px",
                backgroundColor: "#334257"
            }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            {/* <MenuIcon /> */}
          </IconButton>
          <StyledFab  aria-label="add" onClick={handleOpen}>
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
        </Toolbar>
      </AppBar>
            </div>
        </div>
    )
}

export { MidSec };