import React from "react";
// import { useHistory } from "react-router-dom";
import styles from "./Navbar.module.css";
import { button_style } from "./Button_style";
import { Button } from "@mui/material";

export const RightNav = ({ page,checker2 }) => {
  
  const [toggle, setToggle] = React.useState(true);

    const checker3 = (flag) => {
      checker2(flag);
  }

  const handleClick = (id) => {
    if (id === 1) {
      setToggle(true);
      checker2(true)
    }
    else
    {
      setToggle(false);
      checker2(false);
    }
  };



  return(
    <div className={styles.right_nav_container}>
      {button_style.map(({ text, color, mRight, mLeft, id }) => {
        return (
          <Button
            key={text}
            size="medium"
            variant="contained"
            style={{
              textTransform: "none",
              margin: `0% ${mRight} 0% ${mLeft}`,
              backgroundColor: color,
              minWidth: "10%",
              fontWeight: 700,
              color: "black",
            }}
            onClick={() => {
              handleClick(id);
            }}
          >
            {text}
          </Button>
        );
      })}
    </div>
  )
}