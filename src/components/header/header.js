import React from "react";
import styled from "styled-components";
import Logo from './../../../assets/logo.svg';
import Menu from './../../../assets/menu.svg';

const Head = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => (
    <>
        <Head>
            <Logo />
            <Menu />
        </Head>
    </>
);

export default Header;
