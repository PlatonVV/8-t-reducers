import { userReducer } from "./userReducer";

test("user reducer should increment only age", () => {
  const startState = { age: 20, childrenCount: 2, name: "Dimych" };

  const endState = userReducer(startState, { type: "INCREMENT-AGE" });

  expect(endState.age).toBe(21);
  expect(endState.childrenCount).toBe(2);
});

test("user reducer should increment only childrenCount", () => {
  const startState = { age: 20, childrenCount: 2, name: "Dimych" };

  const endState = userReducer(startState, {
    type: "INCREMENT-CHILDREN-COUNT",
  });

  expect(endState.age).toBe(20);
  expect(endState.childrenCount).toBe(3);
});

test("userReducer should change name of Users", () => {
  const startState = { age: 20, name: "Plato", childrenCount: 2 };

  const newName = "Fedor";

  const endState = userReducer(startState, { type: "CHANGE-NAME", newName });

  expect(endState.name).toBe("Fedor");
  expect(endState.age).toBe(20);
  expect(endState.childrenCount).toBe(2);
});
