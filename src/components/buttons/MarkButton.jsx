import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as MarkIcon } from "../../assets/icons/bookmark.svg";
import { ReactComponent as FilledMarkIcon } from "../../assets/icons/bookmark-filled.svg";

const MarkButton = ({ topright }) => {
  const [marked, setMarked] = useState(false);
  return (
    <StyledMarkButton
      className={topright ? "topright" : ""}
      onClick={() => {
        setMarked(!marked);
      }}
    >
      {!marked ? (
        <MarkIcon className="unfilled" width={32} height={32} />
      ) : (
        <FilledMarkIcon className="filled" width={32} height={32} />
      )}
    </StyledMarkButton>
  );
};

const StyledMarkButton = styled.button`
  ${({ theme }) => theme.common.flexCenter}
  margin: 5px 2px;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  transition: all 0.3s;

  &.topright {
    z-index: 3;
    position: absolute;
    top: 0;
    right: 0;
    justify-content: flex-end;
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .unfilled path {
    fill: none;
    stroke: white;
  }
  .filled path {
    fill: white;
    stroke: none;
  }
`;

export default MarkButton;
