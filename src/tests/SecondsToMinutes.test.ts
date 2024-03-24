import {
  test, expect,
} from 'vitest';

import { secondsToFormatedDuration } from '../utils';

test('secondsToFormatedDuration should convert seconds to minutes', async () => {
  const result = secondsToFormatedDuration(60);
  expect(result).toBe('01:00');
});

test('secondsToFormatedDuration should convert seconds to minutes', async () => {
  const result = secondsToFormatedDuration(120);
  expect(result).toBe('02:00');
});

test('secondsToFormatedDuration should convert seconds to minutes', async () => {
  const result = secondsToFormatedDuration(122);
  expect(result).toBe('02:02');
});

test('secondsToFormatedDuration should convert seconds to minutes', async () => {
  const result = secondsToFormatedDuration(3600);
  expect(result).toBe('60:00');
});
