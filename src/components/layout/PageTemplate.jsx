import React from "react";
import Header from "./Header";

const PageTemplate = (props) => (
  <>
    <Header />
    {props.children}
    {/* <Footer/> */}
  </>
);

export default PageTemplate;
