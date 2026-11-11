import { test } from 'node:test';
import assert from 'node:assert/strict';
import { total } from '../app/model.ts';

test('total adds every value', () => {
  assert.equal(total([2, 3, 5]), 10);
});
