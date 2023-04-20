import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as BackIcon } from "../../assets/icons/chevron-left-line.svg";

const MarkButton = ({ topright }) => {
  return (
    <Link to="..">
      <StyledMarkButton>
        <BackIcon />
      </StyledMarkButton>
    </Link>
  );
};

const StyledMarkButton = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 50%;
  transition: all 0.3s;

  path {
    stroke: white;
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default MarkButton;
