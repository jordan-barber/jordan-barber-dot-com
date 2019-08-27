import React from "react";
import styled from "styled-components";
import Logo from './../../../assets/logo.svg';
import Menu from './../../../assets/menu.svg';
import PropTypes from 'prop-types';

const Head = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const MenuContainer = styled.div`
  cursor: pointer;
  opacity: .6;
  transition: opacity 0.5s ease-in-out;
  
  :hover {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
  }
`;

const Header = (props) => (
    <>
        <Head>
            <Logo />
            <MenuContainer>
                <Menu onClick={props.toggleMenu} />
            </MenuContainer>
        </Head>
    </>
);

Header.propTypes = {
    toggleMenu: PropTypes.func.isRequired
}

export default Header;
