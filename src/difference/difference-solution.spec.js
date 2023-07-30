import { differenceSolution } from './difference-solution.js';

describe('differenceSolution([1,2,3,4,5],[7,2,8,6,9])', () => {
  it('should return (1,3,4,5)when i pass(1,2,3,4,5),(7,2,8,6,9)', () => {
    expect(differenceSolution([1, 2, 3, 4, 5], [7, 2, 8, 6, 9])).toEqual([
      1, 3, 4, 5,
    ]);
  });
});
describe('differenceSolution([a,b,d,c,f,g]),[e,f,d,g,h,c])', () => {
  it('should return(a,b)when i pass( a,b,d,c,f,g),(e,f,d,g,h,c])', () => {
    expect(
      differenceSolution(
        ['a', 'b', 'd', 'c', 'f', 'g'],
        ['e', 'f', 'd', 'g', 'h', 'c'],
      ),
    ).toEqual(['a', 'b']);
  });
});

describe('differenceSolution([Apple,Banana,Orange,Cucumber],[Kiwi,Cucumber,Strawberry,Apple])', () => {
  it('should return(Banana,Orange)When i pass(Apple,Banana,Orange,Cucumber),(Kiwi,Cucumber,Strawberry,Apple)', () => {
    expect(
      differenceSolution(
        ['Apple', 'Banana', 'Orange', 'Cucumber'],
        ['Kiwi', 'Cucumber', 'Strawberry', 'Apple'],
      ),
    ).toEqual(['Banana', 'Orange']);
  });
});

describe('differenceSolution([Dog,Cat,5,4,6],[Dog,Cat,5,4,6])', () => {
  it('should return()when i pass(Dog,Cat,5,4,6),(Dog,Cat,5,4,6)', () => {
    expect(
      differenceSolution(['Dog', 'Cat', 5, 4, 6], ['Dog', 'Cat', 5, 4, 6]),
    ).toEqual([]);
  });
});

describe('differenceSolution([Dog,Cat,5,4,6],[Donkey,Ass,8,9,7])', () => {
  it('should return()when i pass(Dog,Cat,5,4,6),(Donkey,Ass,8,9,7)', () => {
    expect(
      differenceSolution(['Dog', 'Cat', 5, 4, 6], ['Donkey', 'Ass', 8, 9, 7]),
    ).toEqual(['Dog', 'Cat', 5, 4, 6]);
  });
});
