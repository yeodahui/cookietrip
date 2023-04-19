import React from "react";
import MarkButton from "../components/buttons/MarkButton";
import ContentsList from "../components/ContentsList";
import PageTemplate from "../components/layout/PageTemplate";

const HomePage = (props) => {
  return (
    <>
      <PageTemplate pageName="홈 피드" header={true} bottomBar={true}>
        <ContentsList
          contents={places}
          title={"떠오르는 핫플레이스🔥"}
          description={"지금 가장 인기있는 장소들을 모아 봤어요"}
          markable={true}
        />
        <ContentsList
          contents={places.reverse()}
          title={"엎어지면 코앞 👀"}
          description={"걸어서 10분 이내로 갈 수 있는 장소에요"}
          markable={true}
        />
      </PageTemplate>
    </>
  );
};

const places = [
  {
    name: "홍쌀빵",
    description: "소금빵 맛집",
    source: "",
    location: "",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/4B32/image/WlXkrtzJpAFet7ZO5YnO3LR0NFs.jpg",
  },
  {
    name: "셀라스",
    description: "카공 하기 좋은 카페",
    source: "",
    location: "",
    image:
      "https://d12zq4w4guyljn.cloudfront.net/750_750_20221107015222375_photo_wP3KozDlpWwg.jpg",
  },
  {
    name: "구포할매국수",
    description: "외대생들이 국수 먹는 곳",
    source: "",
    location: "",
    image:
      "https://minio.nculture.org/amsweb-opt/multimedia_assets/181/85377/86080/c/%EB%8C%80%EB%8F%99%ED%95%A0%EB%A7%A4%EA%B5%AD%EC%88%98_%EB%AC%BC%EA%B5%AD%EC%88%98-%282%29-medium-size.jpg",
  },
];

export default HomePage;
