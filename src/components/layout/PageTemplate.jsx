import React from "react";
import styled from "styled-components";
import BottomBar from "../BottomBar";
import Header from "./Header";

const PageTemplate = ({ header, bottomBar, pageName, ...props }) => (
  <>
    {header ? <Header /> : null}
    <HiddenHeading className="a11y-hidden">{pageName}</HiddenHeading>
    <StyledMain>{props.children}</StyledMain>
    {bottomBar ? <BottomBar /> : null}
    {/* <Footer/> */}
  </>
);

const HiddenHeading = styled.h1`
  ${({ theme }) => theme.common.a11yHidden}
`;
const StyledMain = styled.main`
  margin-top: 60px;
  padding-bottom: 86px;
  overflow: hidden;
`;

export default PageTemplate;
