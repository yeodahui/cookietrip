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
  padding: 30px 20px 20px;
  color: ${({ theme }) => theme.colors.text};

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
