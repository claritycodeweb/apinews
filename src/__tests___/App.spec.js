import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, cleanup, waitFor } from '@testing-library/react';
import { App } from '../App';
import { storyIds, fakeStory } from '../fixtures';
import { getStory, getStoryIds } from '../services/hacker-news-api';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { STORY_INCREMENT } from '../constants';
import useLazyImage from '../hooks/useLazyImage';

beforeEach(cleanup);

jest.mock('../hooks/useInfiniteScroll.js');
jest.mock('../services/hacker-news-api.js', () => ({
  getStory: jest.fn(),
  getStoryIds: jest.fn(),
}));
jest.mock('../hooks/useLazyImage.js');

const ref = jest.fn();
test('renders the app', async () => {
  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,
  }));
  useLazyImage.mockImplementation(() => [ref]);
  getStory.mockImplementation(() => Promise.resolve(fakeStory));
  getStoryIds.mockImplementation(() => Promise.resolve(storyIds));

  const { getByText, queryByTestId } = render(<App />);

  await waitFor(() => [
    expect(getByText('Hacker News API')).toBeTruthy(),
    expect(getByText('Google web vitals')).toBeTruthy(),
    expect(queryByTestId('story-by').textContent).toEqual('By: Rafal P'),
  ]);
});
