import React from 'react';
import { StoryMemonize } from '../../components/Story/Story';
import { STORY_INCREMENT } from '../../constants';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import useStoryIdsFetch from '../../hooks/useStoryIdsFetch';
import { GlobalStyle, StoriesContainerWrapper } from './StoriesStyles';

export const StoriesContainer = () => {
  const { loading, result: storyIds } = useStoryIdsFetch();
  const { count } = useInfiniteScroll();

  if (loading) {
    return <div>Loading</div>;
  }

  const maxStories = count * STORY_INCREMENT;
  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id="stories-container">
        <h1>Hacker News API</h1>
        {storyIds.slice(0, maxStories).map((storyId) => (
          <StoryMemonize key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  );
};
