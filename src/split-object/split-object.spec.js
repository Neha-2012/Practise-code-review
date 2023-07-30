import { SplitObject } from './split-object.js';
describe('SplitObject({Name:Shaurya,Surname:Kheterpal, BirthPlace:Hisar})', () => {
  it('should return [{Name:Shaurya},{Surname:Kheterpal},{BirthPlace:Hisar}],when i pass(Name:Shaurya,Surname:Kheterpal,BirthPlace:Hisar)', () => {
    expect(
      SplitObject({
        Name: 'Shaurya',
        Surname: 'Kheterpal',
        BirthPlace: 'Hisar',
      }),
    ).toEqual([
      { Name: 'Shaurya' },
      { Surname: 'Kheterpal' },
      { BirthPlace: 'Hisar' },
    ]);
  });
});

describe('SplitObject({RollNo1:15,RollNo2:21,RollNo3:41,RollNo4:18})', () => {
  it('should return[{RollNo1:15},{RollNo2:21},{RollNo3:41},{RollNo4:18}],when i pass(RollNo:15,RollNo:21,RollNo:41,RollNo:18)', () => {
    expect(
      SplitObject({ RollNo1: 15, RollNo2: 21, RollNo3: 41, RollNo4: 18 }),
    ).toEqual([
      { RollNo1: 15 },
      { RollNo2: 21 },
      { RollNo3: 41 },
      { RollNo4: 18 },
    ]);
  });
});

describe('SplitObject({AnimalName:lion,PetAnimalName:Dog,PetBirdName:Parrot})', () => {
  it('should return[{AnimalName:Lion},{PetAnimalName:Dog},{PetBirdName:Parrot}],when i pass(AnimalName:Lion,PetAnimalName:Dog,PetBirdName:Parrot)', () => {
    expect(
      SplitObject({
        AnimalName: 'Lion',
        PetAnimalName: 'Dog',
        PetBirdName: 'Parrot',
      }),
    ).toEqual([
      { AnimalName: 'Lion' },
      { PetAnimalName: 'Dog' },
      { PetBirdName: 'Parrot' },
    ]);
  });
});

describe('SplitObject({MobileNo:2304,TelephoneNo:2013,LandlineNo:7845})', () => {
  it('should return[{MobileNo:2304},{TelephoneNo:2013},{LandlineNo:7845}],when i pass(MobileNo:2304,TelephoneNo:2013,LandlineNo:7845)', () => {
    expect(
      SplitObject({ MobileNo: 2304, TelephoneNo: 2013, LandlineNo: 7845 }),
    ).toEqual([
      { MobileNo: 2304 },
      { TelephoneNo: 2013 },
      { LandlineNo: 7845 },
    ]);
  });
});

describe('SplitObject({a:25,b:35,c:45,d:55})', () => {
  it('should return[{a:25},{b:35},{c:45}{d:55}],when i pass(a:25,b:35,c:45,d:55)', () => {
    expect(SplitObject({ a: 25, b: 35, c: 45, d: 55 })).toEqual([
      { a: 25 },
      { b: 35 },
      { c: 45 },
      { d: 55 },
    ]);
  });
});
