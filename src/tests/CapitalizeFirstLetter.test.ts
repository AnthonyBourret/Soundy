import {
  test, expect,
} from 'vitest';

import capitalize from '../utils/CapitalizeFirstLetter';

test('capitalize should return the string with the first letter capitalized', async () => {
  const result = capitalize('hello');
  expect(result).toBe('Hello');
});

test('capitalize should return the string with the first letter capitalized', async () => {
  const result = capitalize('hEllo');
  expect(result).toBe('HEllo');
});

test('capitalize should return the string wirh the first letter capitalized', async () => {
  const result = capitalize('Hello');
  expect(result).toBe('Hello');
});
