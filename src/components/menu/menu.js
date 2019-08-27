import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import { IoIosClose } from "react-icons/io"

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1d1d1d;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  opacity: 1;
  // visibility: ${props => !props.isToggled ? 'hidden' : 'visible'};
  // animation: ${props => !props.isToggled ? fadeOut : fadeIn} 1s linear;
  // transition: visibility 1s linear;
`;

const fadeOut = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const MenuItems = styled.ul`
  font-size: 36px;
  text-decoration: none;
  list-style: none;
  text-align: center;
`;

const MenuItem = styled.li`
  font-weight: 300;
  opacity: .6;
  padding: 48px;
  cursor: pointer;
  transition: opacity 0.5s ease-in-out;
  
  :hover {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
  }
`;

const MenuItemActive = styled.li`
  padding: 48px;
  font-weight: bold;
`

const IconContainer = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  font-size: 60px;
  cursor: pointer;
  opacity: .6;
  transition: opacity 0.5s ease-in-out;
  
  :hover {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
  }
`;

const Menu = (props)  => {

    console.log(':S:DS:F:SDF ' + props.isToggled)
    return (
        <MenuContainer isToggled={props.isToggled}>
            <IconContainer>
                <IoIosClose onClick={props.toggleMenu} />
            </IconContainer>
            <MenuItems>
                <MenuItemActive>Home</MenuItemActive>
                <MenuItem>About</MenuItem>
                <MenuItem>Tech</MenuItem>
                <MenuItem>Skills</MenuItem>
                <MenuItem>Work</MenuItem>
                <MenuItem>Contact</MenuItem>
            </MenuItems>
        </MenuContainer>
    )
}

Menu.propTypes = {
    isToggled: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired
}

export default Menu;
