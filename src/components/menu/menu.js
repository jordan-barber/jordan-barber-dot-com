import React from "react"
import styled, { keyframes } from "styled-components"
import PropTypes from "prop-types"
import { IoIosClose } from "react-icons/io"

// TODO - Make this much nicer on a smaller screen

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1d1d1d;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${props => (props.isToggled ? 1 : -1)};
  opacity: ${props => (props.isToggled ? 1 : 0)};
  transition: all 1s linear;
`

const MenuItems = styled.ul`
  font-size: 36px;
  text-decoration: none;
  list-style: none;
  text-align: center;
  padding: 0;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`

const MenuItem = styled.li`
  font-weight: 300;
  opacity: 0.6;
  padding: 48px;
  cursor: pointer;
  transition: opacity 0.5s ease-in-out;

  :hover {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
  }
`

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
  opacity: 0.6;
  transition: opacity 0.5s ease-in-out;

  :hover {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
  }

  @media only screen and (max-width: 768px) {
    font-size: 32px;
    top: 20px;
    right: 20px;
  }
`

class Menu extends React.Component {
  render() {
    return (
      <MenuContainer isToggled={this.props.isToggled}>
        <IconContainer>
          <IoIosClose onClick={this.props.toggleMenu} />
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
}

Menu.propTypes = {
  isToggled: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
}

export default Menu
