import { test, expect } from 'vitest';

import { getAlbumDuration } from '../utils';

test('getAlbumDuration should return the converted duration of the album', async () => {
  const result = getAlbumDuration([
    {
      duration: '60',
    },
  ]);
  expect(result).toBe('01:00');
});

test('getAlbumDuration should return the total duration of the album', async () => {
  const result = getAlbumDuration([
    {
      duration: '60',
    },
    {
      duration: '60',
    },
    {
      duration: '30',
    },
  ]);
  expect(result).toBe('02:30');
});

test('getAlbumDuration should return 00:00', async () => {
  const result = getAlbumDuration([]);
  expect(result).toBe('00:00');
});
