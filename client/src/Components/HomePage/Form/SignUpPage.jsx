import React from "react";
import SignUp from "./SignUP";
import styles from "./part.module.css";

export default function SignupPage() {
  return (
    <div className={styles.comp} id={styles.slide}>
      <div className={styles.comp_part}>
      <div className={styles.upper}>
      <div style={{fontWeight: "900", fontSize: "35px", color: "white"}}>
      Select Location
      </div>
            <SignUp/>
        </div>

       
          </div>
    </div>
  );
}