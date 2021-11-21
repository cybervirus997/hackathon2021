import React from 'react'
import styles from './success.module.css'

function Success() {
    return (
        <>
            <div className={styles.loop}>
    <div className={styles.mountain}></div>
    <div className={styles.hill}></div>
    <div className={styles.tree}></div>
    <div className={styles.tree}></div>
    <div className={styles.tree}></div>
    <div className={styles.rock}></div>
    <div className={styles.truck}></div>
    <div className={styles.wheels}></div>
  </div>
  <div className={styles.thankyou}>
    <div className={styles.flip}>
      <div>
        <div>successfull.</div>
      </div>
      <div>
        <div>payment</div>
      </div>
      <div>
        <div>Thank You</div>
      </div>
    </div>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Antu_vcs-normal.svg/1024px-Antu_vcs-normal.svg.png"
      alt="green-tick" />
  </div>
  {/* <div className={styles.clickme}><a href="../afterLogin_Page/afterLogin.html">
      <h4>Click here</h4>
    </a>to continue shopping</div> */}
  </>
    )
}

export default Success
