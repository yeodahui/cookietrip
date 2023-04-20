import React from "react";
import styled from "styled-components";
import KakaoMap from "./KakaoMap";

const PlaceInfoCard = ({ data }) => {
  const { placename, location, src } = data;
  return (
    <StyledCard>
      <ul className="info_list">
        <li className="item title">
          <p>{placename}</p>
        </li>
        <li className="item location">
          <p className="text">위치: {location}</p>
          <p className="text">거리: 1km</p>
          <KakaoMap location={location} placename={placename} />
        </li>
        <li className="item source">
          <p>출처</p>
          <a href={src}>인스타그램 @likelion_bufs</a>
        </li>
      </ul>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 350px;
  height: 90%;
  padding: 30px 20px 20px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;

  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.field};
  box-shadow: 0 0 20px #ffffff, 0 5px 30px #000000a9;

  .info_list {
    .item:not(:last-child) {
      margin-bottom: 10px;
    }
    .title {
      padding-bottom: 10px;
      font-size: ${({ theme }) => theme.fontSizes.lg};
      font-weight: bold;
      border-bottom: 1px solid ${({ theme }) => theme.colors.greytext};
    }
    .location {
      .text {
        margin-bottom: 5px;
      }
      .text:last-of-type {
        margin-bottom: 10px;
      }
    }
  }
`;

export default PlaceInfoCard;
