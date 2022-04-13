import React from "react";
import styled from "styled-components";

const Titlemain = styled.h2`
  text-align: center;
  width: 80vw;
  font-size: 30px;
  color: #3a2519;
  font-family: "Square Peg", cursive;
`;

const Container = styled.div`
  width: 80vw;
  height: 15vh;
`;

const About = ({ name, age, studying }) => {
  return (
    <Container>
      <Titlemain>
        My name is {name}, I'm {age} and I'm trying to study {studying}!{" "}
      </Titlemain>
    </Container>
  );
};

export default About;
