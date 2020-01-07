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

const Title = styled.h1`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 52px;
  color: #ffffff;
  padding: 0;
  margin: 0;

  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 2) {
    font-size: 22px;
  }
`;

const SubHeading = styled.h3`
  font-weight: 300;
  color: #ffffff;
  margin: 0;

  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 2) {
        display: none;
    }
`;

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const GridItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 2) {
        flex-direction: column;
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  text-align: left;
  padding: 40px;
  max-width: 400px;
  font-weight: 300;

  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 2) {
        padding: 0;
        margin-top: 48px;
        text-align: center;
  }
`;

const GridItemTitle = styled.div`
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 12px;
  border-bottom: solid 1px #ffffff;
  padding-bottom: 4px;
`;


const Skills = () => (
    <Container id='skills'>
        <Title>Skills</Title>
        <SubHeading>Some of the awesome skills I've gained throughout my career.</SubHeading>
        <GridContainer>
            <GridItemContainer>
                <GridItem>
                    <GridItemTitle>Software Development</GridItemTitle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat augue non eleifend efficitur. Integer consectetur nisi quis turpis ornare molestie. Nam dapibus, augue tempor aliquet commodo, tortor nisi viverra sem, eget laoreet libero justo quis turpis
                </GridItem>
                <GridItem>
                    <GridItemTitle>Agile Software Development</GridItemTitle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat augue non eleifend efficitur. Integer consectetur nisi quis turpis ornare molestie. Nam dapibus, augue tempor aliquet commodo, tortor nisi viverra sem, eget laoreet libero justo quis turpis
                </GridItem>
            </GridItemContainer>
            <GridItemContainer>
                <GridItem>
                    <GridItemTitle>Unit and Integration Testing</GridItemTitle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat augue non eleifend efficitur. Integer consectetur nisi quis turpis ornare molestie. Nam dapibus, augue tempor aliquet commodo, tortor nisi viverra sem, eget laoreet libero justo quis turpis
                </GridItem>
                <GridItem>
                    <GridItemTitle>User Centered Development</GridItemTitle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat augue non eleifend efficitur. Integer consectetur nisi quis turpis ornare molestie. Nam dapibus, augue tempor aliquet commodo, tortor nisi viverra sem, eget laoreet libero justo quis turpis
                </GridItem>
            </GridItemContainer>
        </GridContainer>
    </Container>
);

export default Skills;
