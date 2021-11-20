import React from "react";
import styles from "./LandingPage.module.css";
import { Navbar } from "../SubComponents/Navbar/Navbar";
import mob from "./mob.png";
import styled from "styled-components";
import img1 from "./img1.jpg";
import img2 from "./img2.png";
import img3 from "./img3.jpg";
import LoginPage from "../SubComponents/Login/LoginPage";
import SignupPage from "../SubComponents/SignUp/SignUpPage";
const FlexBox = styled.div`
  width: 100%;
  display: flex;
`;
const DivStyle = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  background-color: #688983;
`;
const CorDiv = styled.div`
  position: absolute;
  width: 200px;
  height: 420px;
  top: 35px;
  left: 20px;
  // border: 1px solid red;
`;
const ImgDiv = styled.div`
  position: absolute;
  top: 130px;
  left: 255px;
`;
const DivStyleOne = styled.div`
  width: 50%;
  height: 100%;
  background-color: transparent;
`;

var arr = [img1, img2, img3];
export const LandingPage = () => {
  const [image, setImage] = React.useState(0);


  React.useEffect(() => {
    const interval = setInterval(() => {
      if(image === arr.length-1){
        setImage(0)
      }
      else{
        setImage(image + 1)
      }
    }, 2000);
    // return () => clearInterval(interval);
  }, []);

  // setInterval(function () {
    
  //   if(image === arr.length-1){
  //     setImage(0)
  //   }
  //   else{
  //     setImage(image + 1)
  //   }
  // },10000);

  return (
    
    <div>
      <div className={styles.container} id="a">
        <Navbar />
        <FlexBox>
          <DivStyle>
            <ImgDiv>
              <CorDiv><img src={arr[image]} alt="img" width="100%" /></CorDiv>
              <img src={mob} alt="mob" />
            </ImgDiv>
          </DivStyle>
          <DivStyleOne>
            <LoginPage />
            <SignupPage/>
          </DivStyleOne>
        </FlexBox>
      </div>
    </div>
  );
};
