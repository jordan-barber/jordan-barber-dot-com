import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { MdPhone, MdMail } from 'react-icons/md';

const Foot = styled.div`
  width: 100%;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
`;

const Social = styled.div`
  opacity: 0.75;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  transition: opacity 0.25s ease-in-out; // TODO - Fix this bug, all of the socials hover at the same time.
  
  :hover {
    transition: opacity 0.25s ease-in-out;
    opacity: 1;
  }
`;

const Spacer = styled.span`
  margin-left: 48px;
`;

const Text = styled.div`
  font-size: 12px;
  letter-spacing: 1.46px;
  margin-left: 8px;
  align-self: center;
  @media only screen and (max-width: 1024px) {
    display: none;    
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = ({ children }) => {
    return (
        <Foot>
            {children}
            <Social>
                <Wrapper>
                <FaTwitter />
                </Wrapper>
                <Spacer />
                <Wrapper>
                <FaLinkedinIn />
                </Wrapper>
                <Spacer />
                <Wrapper>
                    <MdPhone />
                    <Text>+44 7921 543440</Text>
                </Wrapper>
                <Spacer />
                <Wrapper>
                    <MdMail />
                    <Text>jordan@barber.io</Text>
                </Wrapper>
            </Social>
        </Foot>

    )
}

Footer.propTypes = {
    children: PropTypes.node,
}

export default Footer
