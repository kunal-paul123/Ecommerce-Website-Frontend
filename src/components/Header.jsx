import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Navbar from "./Nav";

function Header() {
  return (
    <MainHeader>
      <NavLink to="/">
        <img className="logo" src="./images/logo.png" alt="my logo img" />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 4rem;
  }
`;

export default Header;
