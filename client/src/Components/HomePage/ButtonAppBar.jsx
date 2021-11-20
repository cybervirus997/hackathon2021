import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { useSelector, useDispatch} from "react-redux";
import {deleteToken} from "../../Redux/action";
import { useHistory } from "react-router";


export default function ButtonAppBar() {

  const dispatch = useDispatch();
    const history = useHistory();

  const user = useSelector(state => state.loggedInUser);
  
  
  const handleLogOut = () => {
    dispatch(deleteToken());
    history.push("/");
    }

  return (
    <Box sx={{ flexGrow: 1, zIndex:"1" }}>
      <AppBar position="static" style={{backgroundColor: "#334257"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography style={{fontWeight: "900"}} variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Shareकरो
          </Typography>
          <Button color="inherit" onClick={handleLogOut}>Logout</Button>

          <div style={{ marginLeft:"0.78%",width: "50px", height: "50px", borderRadius: "50px" }} >
            <img src={user.profile_pic} alt="" style={{ borderRadius: "50px",width:"100%",objectFit:"contain"}} />
          </div>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
