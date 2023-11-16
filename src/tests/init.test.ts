import {
  test, expect,
} from 'vitest';

function addTwoAndTwo() {
  const result = 2 + 2;
  return result;
}

test('addTwoAndTwo should equal 4', async () => {
  const result = addTwoAndTwo();
  expect(result).toBe(4);
});
