import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import { StoriesContainer } from '../container/Stories/Stories';
import { storyIds, fakeStory } from '../fixtures';
import { getStory, getStoryIds } from '../services/hacker-news-api';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { STORY_INCREMENT } from '../constants';
import useLazyImage from '../hooks/useLazyImage';

beforeEach(cleanup);

jest.mock('../hooks/useLazyImage.js');
jest.mock('../hooks/useInfiniteScroll.js');
jest.mock('../services/hacker-news-api', () => ({
  getStory: jest.fn(),
  getStoryIds: jest.fn(),
}));

const ref = jest.fn();

test('renders the app', async () => {
  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,
  }));
  useLazyImage.mockImplementation(() => [ref]);
  getStory.mockImplementation(() => Promise.resolve(fakeStory));
  getStoryIds.mockImplementation(() => Promise.resolve(storyIds));

  const { getByText, queryByTestId } = render(<StoriesContainer />);

  await waitFor(() => [
    expect(getByText('Hacker News API')).toBeTruthy(),
    expect(getByText('Google web vitals')).toBeTruthy(),
    expect(queryByTestId('story-by').textContent).toEqual('By: Rafal P'),
  ]);
});
