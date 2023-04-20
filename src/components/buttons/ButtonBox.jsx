import React from "react";
import styled from "styled-components";
import MarkButton from "./MarkButton";
import { ReactComponent as MapMarkerIcon } from "../../assets/icons/map-marker.svg";
import { ReactComponent as MoreIcon } from "../../assets/icons/more-menu-line.svg";
// import { ReactComponent as ShareIcon } from "../../assets/icons/bookmark-filled.svg";

const ButtonBox = (props) => (
  <StyledButtonBox>
    <MarkButton />
    <StyledButton>
      <MapMarkerIcon />
    </StyledButton>
    <StyledButton>
      <MoreIcon />
    </StyledButton>
  </StyledButtonBox>
);

const StyledButtonBox = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn}
  display: inline-flex;
  /* position: absolute;
  bottom: 0;
  right: 0; */
`;

const StyledButton = styled.button`
  ${({ theme }) => theme.common.flexCenter}
  justify-content: center;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  path,
  circle {
    fill: none;
    stroke: white;
  }
`;

export default ButtonBox;
