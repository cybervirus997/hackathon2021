import React from "react";
import styles from "./Navbar.module.css";
import { useHistory } from "react-router-dom";
import img from "./logo1.png";

export const LeftNav = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className={styles.left_nav_container}>
      <div className={styles.tumblr_icon_container} onClick={handleClick}>
      <div style={{fontWeight: "900", fontSize: "42px", color: "white"}}>Share<span style={{fontWeight: "900", fontSize: "32px", color: "white"}}>करो</span></div>
      </div>
    </div>
  );
};
