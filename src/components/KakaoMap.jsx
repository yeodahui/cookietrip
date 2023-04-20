import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const { kakao } = window;

const KakaoMap = ({ data }) => {
  const mapContainer = useRef();
  //   const { location } = data;

  useEffect(() => {
    console.log(kakao.maps);
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    //지도 생성 및 객체 리턴
    const map = new kakao.maps.Map(mapContainer.current, options);

    // 주소로 좌표를 검색합니다
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch("부산 금정구 금샘로 488", (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const markerPosition = new kakao.maps.LatLng(result[0].y, result[0].x);
        // 지도에 마커를 생성하고 표시
        const marker = new kakao.maps.Marker({
          position: markerPosition,
          map: map, // 마커를 표시할 지도 객체
        });
        marker.setMap(map);

        // 마커 위 인포윈도우
        const infowindow = new kakao.maps.InfoWindow({
          content: '<div style="padding:5px;">홍쌀빵</div>', // 인포윈도우에 표시할 내용
        });
        infowindow.open(map, marker);
        map.setCenter(markerPosition);
      } else {
        console.log("주소 변환 실패");
      }
    });
  }, []);

  return <Map id="map" ref={mapContainer}></Map>;
};

const Map = styled.div`
  width: 100%;
  height: 250px;
  background-color: red;
`;
export default KakaoMap;
