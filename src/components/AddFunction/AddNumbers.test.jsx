import { myTestFunction } from "./AddNumbers.jsx";

test('adds 1 + 2 to equal 3', () => {
  expect(myTestFunction(1, 2)).toBe(3);
});
