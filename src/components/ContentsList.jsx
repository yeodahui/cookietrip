import React from "react";
import styled from "styled-components";
import ContentItem from "./ContentItem";

const ContentsList = ({ title, description, contents, markable, ...props }) => {
  return (
    <StyledContentsList>
      <h3 className="title">{title}</h3>
      {description ? <p className="description">{description}</p> : null}
      <ul className="list">
        {contents.map((item, i) => (
          <ContentItem
            key={`${i}`}
            description={item.description}
            markable={markable}
            name={item.name}
            image={item.image}
          />
        ))}
      </ul>
    </StyledContentsList>
  );
};

const StyledContentsList = styled.article`
  margin-top: 10px;
  padding: 30px 20px;
  background-color: ${({ theme }) => theme.colors.field};
  /* border-radius: 20px; */

  .title {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: bolder;
  }

  .description {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }

  .list {
    margin-top: 15px;
    width: 100%;
    display: flex;
    overflow-x: scroll;
    flex-wrap: nowrap;
    gap: 10px;
  }
`;

export default ContentsList;
