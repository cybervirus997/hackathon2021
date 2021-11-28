import React from "react";
import SingleUserFormData from "./SingleUserFormData";
import styles from "./part.module.css";

export default function SingleUserHome() {
  return (
    <div className={styles.comp} id={styles.slide}>
      <div className={styles.comp_part}>
      <div className={styles.upper}>
      <div style={{fontWeight: "900", fontSize: "35px", color: "white"}}>
      Select Location
      </div>
            <SingleUserFormData/>
        </div>

       
          </div>
    </div>
  );
}