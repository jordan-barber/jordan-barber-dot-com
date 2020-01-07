import React from 'react';
import styled from 'styled-components';
import PercentageBar from './PercentageBar';

const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 52px;
  color: #ffffff;
  padding: 0;
  margin: 0;
  
  @media only screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

const SubHeading = styled.h3`
  font-weight: 300;
  color: #ffffff;
  margin: 0;
  
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Tech = () => (
    <Container id='tech'>
        <Title>Tech</Title>
        <SubHeading>Some of my technology specialities.</SubHeading>
        <PercentageBar percentage={ 80 } label='JavaScript/TypeScript'/>
        <PercentageBar percentage={ 70 } label='Java/Kotlin'/>
        <PercentageBar percentage={ 80 } label='React'/>
        <PercentageBar percentage={ 70 } label='Node'/>
        <PercentageBar percentage={ 60 } label='AWS'/>
    </Container>
);

export default Tech;
