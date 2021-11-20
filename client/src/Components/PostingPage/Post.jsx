import React from 'react'
//import axios from "axios";
import styled from "styled-components";
// import ButtonAppBar from './';

import { createGlobalStyle } from 'styled-components';
//import truck from './truck.png';
//import SignupPage from './Form/SignUpPage';
import ButtonAppBar from '../HomePage/ButtonAppBar';
import { MidSec } from './MidSec';
//import BottomAppBar from './MidSection';
// import SignupPage from '../SubComponents/SignUp/SignUpPage';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
  `;

const Container=styled.div`
padding: 0px;
  margin: 0px;
width: 100%;
  height: 100vh;
  background-color: #161B22;
  font-family: "Favorit, Helvetica Neue, HelveticaNeue, Helvetica, Arial,sans-serif";
`
const FlexBox = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  z-index: 0;
`;
const DivStyle = styled.div`
  position: relative;
  width: 50%;
  height: 100.23%;
  background-color: #688983;

`;
// const CorDiv = styled.div`
//   position: absolute;
//   width: 200px;
//   height: 420px;
//   top: 35px;
//   left: 20px;
//   // border: 1px solid red;
// `;
// const ImgDiv = styled.div`
//   position: absolute;
//   top: 130px;
//   left: 255px;
// `;
const DivStyleOne = styled.div`

  width: 50%;
  margin: auto;
  background-color: #161B22;

`;

// const Image = styled.img`
// position: absolute;
// top: 150px;
// left: 115px;
//   width: 70%;
//   height: 50%;

// `;
function PostPage() {
    return (
        <>
        <GlobalStyle/>
        <Container>
            <ButtonAppBar />
            <FlexBox>
                <DivStyle>
                <MidSec />
                </DivStyle>
                <DivStyleOne>
                </DivStyleOne>
               
            </FlexBox>
        </Container>
        </>
    )
}

export default PostPage
