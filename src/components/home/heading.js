import React from "react"
import styled from "styled-components";
import background from './me.jpeg';

const Container = styled.div`
  align-self: center;
  justify-self: center;
  margin: auto;
`;

const Me = styled.div`
  background-image: url("${background}");
  background-size: cover;
  height: 139px;
  width: 139px;
  border-radius: 50%;
  opacity: 0.67;
  align-self: center;
  justify-self: center;
  margin: auto;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  transition: opacity 0.5s ease-in-out;
  
  :hover {
    transition: opacity 0.5s ease-in-out;
    opacity: 1;
  }
  
  @media only screen and (max-width: 768px) {
    height: 100px;
    width: 100px;
  }
`;

const Title = styled.h3`
  opacity: 0.75;
  font-family: OpenSans;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.64px;
  text-align: center;
  color: #ffffff;
  max-width: 596px;
  max-height: 54px;
  
  @media only screen and (max-width: 768px) {
    font-size: 12px; 
  }
`;

const Heading = () => {
    return (
        <Container>
            <Me />
            <Title>
                Hi, I’m Jordan a Software Engineer based in sunny Sheffield.
                Currently working for Sky Betting and Gaming.
            </Title>
        </Container>
    )
}

export default Heading
