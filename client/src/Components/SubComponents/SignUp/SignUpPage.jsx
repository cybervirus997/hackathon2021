import React from "react";
import SignUp from "./SignUP";
import styles from "./part.module.css";

export default function SignupPage() {
  return (
    <div className={styles.comp} id={styles.slide}>
      <div className={styles.comp_part}>
      <div className={styles.upper}>
      <div style={{fontWeight: "900", fontSize: "50px", color: "white"}}>Share<span style={{fontWeight: "900", fontSize: "40px", color: "white"}}>करो</span></div>

            <SignUp/>
        </div>

       
          </div>
          
           <div className={styles.foot}>
          <div className={styles.foot_left}>
            <ul>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Jobs</li>
              <li>Support</li>
            </ul>
          </div>
          <div className={styles.foot_right}>
Posted by Team Error404</div>
        </div>
    </div>
  );
}