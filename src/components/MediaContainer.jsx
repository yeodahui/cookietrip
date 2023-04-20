import styled from "styled-components";

const MediaContainer = ({ media }) => {
  const mediaComponent = {
    ...media,
  };

  // 소스가 이미지이면 컴포넌트에서 다른 태그를 사용하기 위함
  if (mediaComponent.type.includes("image")) {
    mediaComponent.tag = "img";
  } else if (mediaComponent.includes("video")) {
    mediaComponent.tag = "video";
  }

  return (
    <StyledMediaContainer>
      {mediaComponent.tag === "img" ? (
        <img src={mediaComponent.src} alt={mediaComponent.alt} />
      ) : (
        <video controls={false}>
          <source src={mediaComponent.src} type={mediaComponent.type} />
        </video>
      )}
    </StyledMediaContainer>
  );
};

const StyledMediaContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  animation: scaleup 30s alternate ease-in-out infinite;

  &::before {
    content: " ";
    display: block;
    position: absolute;
    width: 100%;
    height: 40%;
    bottom: 0;
    background: linear-gradient(to bottom, transparent, #2a0303cc);
  }

  &::after {
    content: " ";
    display: block;
    position: absolute;
    width: 100%;
    height: 20%;
    top: 0;
    background: linear-gradient(to top, transparent, #2a0303cc);
  }

  @keyframes scaleup {
    from {
      transform: scale(1);
    }

    to {
      transform: scale(1.2);
    }
  }
`;

export default MediaContainer;
