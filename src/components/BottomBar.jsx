import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as MapIcon } from "../assets/icons/map-marker.svg";
import { ReactComponent as ExploreIcon } from "../assets/icons/compass.svg";
import { ReactComponent as BookmarkIcon } from "../assets/icons/bookmark.svg";
import { ReactComponent as UserIcon } from "../assets/icons/user.svg";

const BottomBar = (props) => {
  return (
    <StyledBottomBar>
      <ul>
        <IconNavItem className="item home">
          <Link to="/" className="link home">
            <HomeIcon />
            <span>홈 피드</span>
          </Link>
        </IconNavItem>
        <IconNavItem className="item around">
          <Link to="/around" className="link around">
            <MapIcon />
            <span>내 근처</span>
          </Link>
        </IconNavItem>
        <IconNavItem className="item explore">
          <Link to="/explore" className="link explore">
            <ExploreIcon />
            <span>탐색하기</span>
          </Link>
        </IconNavItem>
        <IconNavItem className="item marked">
          <Link to="/mark" className="link marked">
            <BookmarkIcon />
            <span>북마크</span>
          </Link>
        </IconNavItem>
        <IconNavItem className="item mypage">
          <Link to="/my" className="link mypage">
            <UserIcon />
            <span>마이</span>
          </Link>
        </IconNavItem>
      </ul>
    </StyledBottomBar>
  );
};

const StyledBottomBar = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 10;

  ul {
    width: 100%;
    padding: 10px 8px 12px;
    display: flex;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.button};
  }

  li {
    text-align: center;
    flex: 1 1 44px;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.buttontext};
  }
`;

const IconNavItem = styled.li`
  ${({ theme }) => theme.common.flexCenterColumn}
  font-size: ${({ theme }) => theme.fontSizes.sm};
  width: 40px;

  .link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
      svg {
        transform: scale(1);
        path,
        circle {
          stroke: ${({ theme }) => theme.colors.primary};
        }
      }
    }
    svg {
      transform: scale(0.9);
      margin-bottom: 3px;
      width: 40px;
      transition: all ease-in-out 0.3s;
      stroke: ${({ theme }) => theme.colors.buttontext};

      * {
        transition: all ease-in-out 0.3s;
      }
    }
  }

  &.explore {
    margin: 0 5px;
    svg {
      transform: scale(1.5) translateY(-35%);
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.background};
      box-shadow: 0 0 8px white;
      transition: all 0.5s;
      animation: rotate 5s ease-in-out infinite;

      path {
        fill: ${({ theme }) => theme.colors.primary};
      }
    }
    @keyframes rotate {
      0% {
        transform: scale(1.5) translateY(-35%) rotate(0deg);
      }
      35% {
        transform: scale(1.7) translateY(-35%) rotate(380deg);
        box-shadow: 0 0 13px white;
      }

      46% {
        transform: scale(1.5) translateY(-35%) rotate(-30deg);
      }

      50% {
        transform: scale(1.5) translateY(-35%) rotate(5deg);
      }
      100% {
        transform: scale(1.5) translateY(-35%) rotate(0deg);
      }
    }
  }
`;
export default BottomBar;
