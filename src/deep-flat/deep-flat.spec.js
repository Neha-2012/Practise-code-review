import { deepFlat } from './deepflat.js';

describe('deepflat function', () => {
  it('should flatten a simple nested array', () => {
    const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];
    const flattenedArray = deepFlat(nestedArray);
    expect(flattenedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('should flatten an empty array to an empty array', () => {
    const emptyArray = [];
    const flattenedArray = deepFlat(emptyArray);
    expect(flattenedArray).toEqual([]);
  });

  it('should flatten an array with no nested arrays to the same array', () => {
    const noNestedArray = [1, 2, 3];
    const flattenedArray = deepFlat(noNestedArray);
    expect(flattenedArray).toEqual([1, 2, 3]);
  });

  it('should handle arrays with different data types', () => {
    const mixedArray = [1, [2, 'hello', [true, 4.5]], { key: 'value' }, false];
    const flattenedArray = deepFlat(mixedArray);
    expect(flattenedArray).toEqual([
      1,
      2,
      'hello',
      true,
      4.5,
      { key: 'value' },
      false,
    ]);
  });
});
