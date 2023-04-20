import React from "react";
import styled from "styled-components";
import ButtonBox from "./buttons/ButtonBox";
import BackButton from "./buttons/BackButton";
import TouchableArea from "./TouchableArea";

const ActionArea = ({ data }) => {
  const { location, placename, description } = data;
  return (
    <Container>
      <div className="item top">
        <div className="controls">
          <BackButton />
        </div>
        <div className="infos">
          <div className="location">{location}</div>
          <div className="title">{placename}</div>
        </div>
      </div>
      <TouchableArea data={data} />
      <div className="item bottom">
        <div className="desc">{description}</div>
        <ButtonBox />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 15px 10px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  z-index: 5;

  .top {
    padding-bottom: 10px;

    .controls {
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .infos {
      padding-left: 10px;

      .location {
        margin-bottom: 10px;
        font-size: ${({ theme }) => theme.fontSizes.sm};
      }
      .title {
        font-size: ${({ theme }) => theme.fontSizes.xl};
        font-weight: bold;
        word-break: keep-all;
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .desc {
      padding: 15px 0 0 10px;
      max-width: 80%;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 5;
      line-height: ${({ theme }) => theme.fontSizes.xl};
      font-size: ${({ theme }) => theme.fontSizes.base};
      word-break: keep-all;
    }
  }
`;

export default ActionArea;
