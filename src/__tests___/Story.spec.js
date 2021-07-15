import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import { Story } from '../components/Story/Story';
import { fakeStory } from '../fixtures';
import { getStory } from '../services/hacker-news-api';
import useLazyImage from '../hooks/useLazyImage';

beforeEach(() => {
  cleanup();
  jest.resetAllMocks();
});

jest.mock('../hooks/useLazyImage.js');
jest.mock('../services/hacker-news-api', () => ({
  getStory: jest.fn(),
}));

const ref = jest.fn();
test('renders the app', async () => {
  useLazyImage.mockImplementation(() => [ref]);
  getStory.mockImplementation(() => Promise.resolve(fakeStory));

  const { getByText, queryByTestId, getByTestId } = render(
    <Story storyId={1} />
  );

  await waitFor(() => [
    expect(getByTestId('story')).toBeTruthy(),
    expect(getByText('Google web vitals')).toBeTruthy(),
    expect(queryByTestId('story-by').textContent).toEqual('By: Rafal P'),
  ]);
});
