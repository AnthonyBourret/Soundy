import {
  test, expect,
} from 'vitest';

import capitalizeFirstLetter from '../utils/capitalizeFirstLetter';

test('capitalize should return the string with the first letter capitalized', async () => {
  const result = capitalizeFirstLetter('hello');
  expect(result).toBe('Hello');
});

test('capitalize should return the string with the first letter capitalized', async () => {
  const result = capitalizeFirstLetter('hEllo');
  expect(result).toBe('HEllo');
});

test('capitalize should return the string wirh the first letter capitalized', async () => {
  const result = capitalizeFirstLetter('Hello');
  expect(result).toBe('Hello');
});
