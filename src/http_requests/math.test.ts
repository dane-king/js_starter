import sum  from "./math";
test('sum should add two numbers', ():void => {
    expect(sum(3,6)).toEqual(9);
});