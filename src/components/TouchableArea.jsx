import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PlaceInfoCard from "./PlaceInfoCard";

const TouchableArea = ({ data }) => {
  const [originPos, setOriginPos] = useState({ x: 0, y: 0 }); // 드래그 전 포지션값 (e.target.offset의 상대 위치)
  const [clientPos, setClientPos] = useState({ x: 0, y: 0 }); // 실시간 커서위치인 e.client를 갱신하는값
  const infoCard = useRef();

  useEffect(() => {
    infoCard.current.style.left = "100%";
  }, []);
  const onClickHander = (e) => {
    alert("클릭됨");
  };

  const touchStartHandler = (e) => {
    setOriginPos(e.touches[0].pageX); // 터치가 시작되는 위치 저장
    console.log("touchstart", e.touches[0].pageX);
    if (!infoCard.current.classList.contains("dragging")) {
      infoCard.current.classList.add("dragging");
    }
  };

  const moveHandler = (e) => {
    setClientPos(e.touches[0].pageX);
    console.log(clientPos);
    infoCard.current.style.left = `calc(100% - ${
      (originPos - clientPos) * 2
    }px)`;
  };

  const moveEndHandler = (e) => {
    if (infoCard.current.classList.contains("dragging")) {
      infoCard.current.classList.remove("dragging");
    }
  };

  return (
    <StyledTouchableArea
      onClick={onClickHander}
      onTouchStart={touchStartHandler}
      onTouchMove={moveHandler}
      onTouchEnd={moveEndHandler}
    >
      <div className="card" ref={infoCard}>
        <PlaceInfoCard data={data} />
      </div>
    </StyledTouchableArea>
  );
};

const StyledTouchableArea = styled.div`
  width: 100vw;
  height: 100%;
  transform: translateX(-10px);
  /* background-color: #00000088; */

  .card {
    width: 350px;
    height: 90%;
    transition: all 0.5s;
    position: absolute;
    top: 0;
    /* left: 100%; */
    z-index: 3;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.field};

    border-radius: 30px;
    box-shadow: 0 5px 30px #000000a9;

    &.dragging {
      box-shadow: 0 0 20px #ffffff, 0 0 30px #ffffff, 0 5px 30px #000000a9;
    }
  }
`;

export default TouchableArea;
