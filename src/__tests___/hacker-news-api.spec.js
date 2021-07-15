import axios from 'axios';
import {
  getStory,
  getStoryIds,
  storyUrl,
  storiesUrl,
} from '../services/hacker-news-api';

import { fakeStory, storyIds } from '../fixtures';

jest.mock('axios');

describe('API', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('getStory', () => {
    it('fetch single story from hn api', async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: fakeStory }));
      const result = await getStory(fakeStory.id);

      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${storyUrl + fakeStory.id}.json`);
      expect(result).toEqual(fakeStory);
    });
  });

  describe('getStoryIds', () => {
    it('fetch storyids from hn api', async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: storyIds }));
      const result = await getStoryIds();

      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(storiesUrl);
      expect(result).toEqual(storyIds);
    });
  });
});
