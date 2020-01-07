import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  align-items: center;
  justify-content: center;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  max-width: 600px;
  font-family: "Open Sans", serif;
  display: flex;
  flex-direction: row;
  flex: 1 2 auto;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  
  @media only screen and (max-width: 768px) {
    flex: 1;
  }
`;

const Title = styled.h1`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 52px;
  color: #ffffff;
  
  @media only screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

const LeftContent = styled.div`
  padding: 24px;
  font-size: 36px;
  font-weight: 300;
  border-right: solid 2px rgba(255, 255, 255, .5);
  
  @media only screen and (max-width: 768px) {
    display: none;
    text-align: center;
  }
`;

const RightContent = styled.div`
  padding: 24px;
  font-weight: 300;
  
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const About = () => {
    return (
        <Container id='about'>
            <MainContainer>
                <Title>About Me</Title>
                <ContentContainer>
                    <LeftContent>
                        What I do daily
                    </LeftContent>
                    <RightContent>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet malesuada feugiat.
                        </p>

                        <p>
                        Curabitur fermentum bibendum nulla, non dictum ipsum tincidunt non. Quisque convallis pharetra tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet malesuada feugiat.
                        </p>
                    </RightContent>
                </ContentContainer>
            </MainContainer>
        </Container>
    );
};

export default About;
