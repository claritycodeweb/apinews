import styled, { keyframes } from 'styled-components';

const show = keyframes`
    0% {
        opacity: 0;
    }

    80% {
    }

    100% {
        opacity: 1;
    }
`;

const StoryWrapper = styled.section`
  padding-top: 10px;
  margin-bottom: 20px;
  border-top: 1px solid #cccccc;
  animation: ${show};
  animation-duration: 1s;
  animation-timing-function: ease-out;
  a {
    color: #2e2e2c;
    text-decoration: none;
  }
`;

const StoryTitle = styled.h1`
  margin-bottom: 5px;
  font-size: 35px;
  line-height: 1.8;
  margin: 0;
  text-decoration: none;
`;

const StoryMeta = styled.div`
  display: flex;

  flex-direction: column;
  font-style: italic;

  > span:first-child {
    margin-right: 10px;
    margin-top: 15px;
  }

  > span {
    margin-top: 5px;
  }

  .story__meta-bold {
    font-weight: bold;
  }
`;

const StoryUrl = styled.div`
  font-style: italic;
`;

const StoryMetaElement = styled.span`
  font-weight: bold;
  color: ${(props) => props.color || 'red'};
`;

const StoryImage = styled.img`
  max-width: 100%;
  object-fit: cover;
  min-height: 300px;
  border: 1px solid lightgray;
`;

export const S = {
  StoryWrapper,
  StoryTitle,
  StoryMeta,
  StoryUrl,
  StoryMetaElement,
  StoryImage,
};
