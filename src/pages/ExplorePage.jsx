import React from "react";
import styled from "styled-components";
import ControlArea from "../components/ControlArea";
import MediaContainer from "../components/MediaContainer";
import PlaceInfoCard from "../components/PlaceInfoCard";

const ExplorePage = (props) => {
  const card = cards[0];

  return (
    <>
      <StyledContainer>
        <MediaContainer media={card.media} />
        <ControlArea data={card} />
        <PlaceInfoCard data={card} />
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  max-width: 550px;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: #ccc;
`;

const cards = [
  {
    placename: "홍쌀빵",
    location: "부산 금정구 남산동",
    description: "소금빵먹었는데 넘맛있어서 기절. 시그니처빵도 맛있음",
    src: "https://www.instagram.com/likelion_bufs",
    media: {
      type: "image",
      src: "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/4B32/image/WlXkrtzJpAFet7ZO5YnO3LR0NFs.jpg",
    },
  },
  {
    placename: "홍쌀빵",
    location: "부산 금정구 남산동",
    description:
      "소금빵먹었는데 넘맛있어서 기절. 시그니처빵도 맛있음소금빵먹었는데 넘맛있어서 기절. 시그니처빵도 맛있음소금빵먹었는데 넘맛있어서 기절. 시그니처빵도 맛있음소금빵먹었는데 넘맛있어서 기절. 시그니처빵도 맛있음소금빵먹었는데 넘맛있어서 기절. 시그니처빵도 맛있음",
    src: "https://www.instagram.com/likelion_bufs",
    media: {
      type: "image",
      src: "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/4B32/image/WlXkrtzJpAFet7ZO5YnO3LR0NFs.jpg",
    },
  },
];

export default ExplorePage;
