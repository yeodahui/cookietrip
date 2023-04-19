import React from "react";
import styled from "styled-components";

const ContentItem = ({ description, name, image, location, ...props }) => {
  return (
    <StyledContentItem className="item">
      <div className="container">
        <img className="image" src={image} alt=" " />
        <div className="container-text">
          <p className="placename">
            {description}, {name}
          </p>
          <p className="location">부산 금정구, 1km</p>
        </div>
      </div>
    </StyledContentItem>
  );
};

const StyledContentItem = styled.li`
  width: 200px;
  flex: 0 0 auto;
  font-size: 0;
  overflow: hidden;
  position: relative;

  &::before {
    content: " ";
    display: block;
    position: absolute;
    width: 100%;
    height: 40%;
    bottom: 0;
    background: linear-gradient(to bottom, transparent, #00000055);
  }

  .image {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .container-text {
    position: absolute;
    left: 10px;
    bottom: 15px;
    z-index: 3;

    .placename {
      font-size: ${({ theme }) => theme.fontSizes.lg};
      /* line-height: calc(${({ theme }) => theme.fontSizes.lg} + 0.5rem); */
      font-weight: bold;
      word-break: keep-all;
      color: white;
    }
    .location {
      margin-top: 5px;
      font-size: ${({ theme }) => theme.fontSizes.sm};
      color: white;
    }
  }
`;

export default ContentItem;
