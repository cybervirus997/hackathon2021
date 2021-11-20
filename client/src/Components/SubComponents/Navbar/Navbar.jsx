import React from "react";
import styles from "./Navbar.module.css";
import { LeftNav } from "./LeftNav";
import { RightNav } from "./RightNav";

export const Navbar = ({ page, left_nav, right_nav, checker1 }) => {
  
  const checker2 = (flag1) => {
    checker1(flag1)
  }

  return (
    <div
      className={
        page === "login"
          ? styles.login_container
          : page === "home"
          ? styles.home_container
          : page === "explore"
          ? styles.home_container
          : styles.no_bar
      }
    >
      <div className={styles.left_nav}>
        {/* {left_nav} */}
        <LeftNav />
      </div>
      <div className={styles.right_nav}>
        {right_nav}
        <RightNav page={page} checker2={checker2} />
      </div>
    </div>
  );
};
