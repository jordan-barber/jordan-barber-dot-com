/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components";

import Header from "./header/header"
import "./layout.css"

const Main = styled.div`
  background-color: #1d1d1d;
  max-width: 1200px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (

      <Main>
          <Header />
          {children}
      </Main>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
