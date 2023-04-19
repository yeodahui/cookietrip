import React from "react";
import ContentsList from "../components/ContentsList";
import PageTemplate from "../components/layout/PageTemplate";

const places = [
  {
    name: "홍쌀빵",
    description: "소금빵 맛집",
    source: "",
    location: "",
    image: "http://via.placeholder.com/640x480",
  },
  {
    name: "셀라스",
    description: "카공 하기 좋은 카페",
    source: "",
    location: "",
    image: "http://via.placeholder.com/640x480",
  },
  {
    name: "구포할매국수",
    description: "외대생들이 국수 먹는 곳",
    source: "",
    location: "",
    image: "http://via.placeholder.com/640x480",
  },
];

const HomePage = (props) => {
  return (
    <>
      <PageTemplate>
        <ContentsList
          contents={places}
          title={"떠오르는 핫플레이스🔥"}
          description={"지금 가장 인기있는 장소들을 모아 봤어요"}
        />
      </PageTemplate>
    </>
  );
};

export default HomePage;
