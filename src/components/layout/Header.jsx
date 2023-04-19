import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = (props) => (
  <StyledHeader>
    <Link to="/" className="logo">
      🍪 COOKIE TRIP
    </Link>
  </StyledHeader>
);

const StyledHeader = styled.header`
  width: 100%;
  padding: 20px 15px;
  position: fixed;
  top: 0;
  z-index: 10;
  /* background-color: ${({ theme }) => theme.colors.field}; */
  background-color: ${({ theme }) => theme.colors.primary};

  .logo {
    /* color: ${({ theme }) => theme.colors.primary}; */
    color: ${({ theme }) => theme.colors.field};
    font-weight: 900;
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export default Header;
