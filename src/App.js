import React, { Component } from "react";
import About from "./Components/About.js";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import img from "./IMG/background.jpg";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const TitleOne = styled.h1`
  height: 15vh;
  font-size: 40px;
  text-shadow: 2px 1px #f7f6a5;
  color: #fff;
  text-align: center;
  -webkit-animation: TitleOne 1s ease-in-out infinite alternate;
  -moz-animation: TitleOne 1s ease-in-out infinite alternate;
  animation: TitleOne 1s ease-in-out infinite alternate;
  @keyframes TitleOne {
    from {
      text-shadow: 0 0 10px #fc4e17, 0 0 20px #fc4e17, 0 0 30px #ff7c00,
        0 0 40px #ff7c00, 0 0 50px #fff700, 0 0 60px #fff700, 0 0 70px #ff7c00;
    }
    to {
      text-shadow: 0 0 20px #fc4e17, 0 0 30px #ff7c00, 0 0 40px #ff7c00,
        0 0 50px #ff7c00, 0 0 60px #ff7c00, 0 0 70px #ff7c00, 0 0 80px #ff7c00;
    }
  }
`;

const Container = styled.div`
  background-image: url(${img});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <TitleOne>Hey there</TitleOne>
        <About
          name="Dandara Aryadne"
          age="Unfortunately 30 "
          studying="React"
        ></About>
      </Container>
    );
  }
}
