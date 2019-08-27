/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby" // TODO - See below todo for SEO.
import styled from "styled-components";

import Header from "./header/header"
import "./layout.css"
import Footer from "./footer";
import Menu from "./menu/menu";

const Main = styled.div`
  background-color: #1d1d1d;
  max-width: 1400px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

class Layout extends React.Component{
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `) // TODO - Use this for SEO bits and bobs.

    constructor(props) {
        super(props);

        this.state = {
            showMenu: false
        }

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        const { showMenu } = this.state;

        this.setState({showMenu: !showMenu});
    }

    render() {
        const { children } = this.props;
        const { showMenu } = this.state;

        console.log('***** ' + showMenu)

        return (
            <Main>
                <Header toggleMenu={this.toggleMenu} />
                {showMenu &&
                    <Menu isToggled={showMenu} toggleMenu={this.toggleMenu}/>
                }
                {children}
                <Footer/>
            </Main>
        )
    }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
