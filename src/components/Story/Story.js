import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import useLazyImage from '../../hooks/useLazyImage';
import { mapTime } from '../../mappers/mapTime';
import { getStory } from '../../services/hacker-news-api';
import { S } from './StoryStyles';

export const Story = ({ storyId }) => {
  const [story, setStory] = useState(null);
  const [imgRef] = useLazyImage();

  useEffect(() => {
    getStory(storyId).then((data) => data && setStory(data));
  }, [storyId]);

  return story ? (
    <S.StoryWrapper data-testid="story">
      <a href={story.url} target="_blank" rel="noreferrer">
        <S.StoryTitle>{story.title}</S.StoryTitle>
        <S.StoryImage
          ref={imgRef}
          alt={story.title}
          data-src={`https://picsum.photos/900/300?random=${storyId}`}
          data-lazy="true"
          src="https://via.placeholder.com/900x300?text=Loading..."
          width="900"
          height="300"
        />
        <S.StoryMeta>
          <span data-testid="story-by">
            <S.StoryMetaElement color="#000">By: </S.StoryMetaElement>
            {story.by}
          </span>
          <span data-testid="story-time">
            <S.StoryMetaElement color="#000">Posted: </S.StoryMetaElement>
            {mapTime(story.time)}
          </span>
          <span data-testid="story-url">
            <S.StoryMetaElement color="#000">Url: </S.StoryMetaElement>
            {story.url}
          </span>
        </S.StoryMeta>
      </a>
    </S.StoryWrapper>
  ) : null;
};

export const StoryMemonize = React.memo(Story);

Story.propTypes = {
  storyId: PropTypes.number.isRequired,
};
