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


function MidSec(){

  const [open, setOpen] = React.useState(false);
  const [getData,setGetData]=useState([]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const checkerClose = () => {
        setOpen(false);
  }
  
  useEffect(() => {
    axios.get("http://localhost:3009/truck")
      .then((data) => {
        console.log(data)
      })
    axios.get("http://localhost:3009/post")
      .then((data) => {
        setGetData(data.data);
        console.log("posts:",data.data)
      })
  },[])

    return (
        <div style={{
            width: "200%",
        }} >
            <div style={{
                // border: "1px solid white",
                position: "absolute",
                width: "153%",
                height: "500px",
                // padding: "2%",
                top: "40px",
                left: "150px",
                backgroundColor: "white"
            }}>
                
          
          {getData.map((el) => {
            return <div>{el.title} {el.truckId.truckName}</div>
          }) }


            </div>
            <div>
            <AppBar position="absolute" sx={{ top: 'auto', bottom: 0 }} style={{
                width: "153%",
                left: "150px",
                backgroundColor: "#334257"
            }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon />
            <button onClick={console.log("hiii")}>Click</button>
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
            <TextField  checkerClose={checkerClose}/>
            </Box>
          </Modal>

          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
            </div>
        </div>
    )
}

export { MidSec };