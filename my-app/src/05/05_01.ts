export type ManType = {
  name: string;
  age: number;
};

const people: ManType[] = [
  { name: "Andrew Ivanov", age: 33 },
  { name: "Alexander Petrov", age: 24 },
  { name: "Dmitry Sidorov", age: 18 },
];

const dimychTransform = (man: ManType) => {
  return {
    stack: ["css, html, js, react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1],
  };
};

const devs1 = [
  { stack: ["css, html"], firstName: "Andrew", lastName: "Ivanov" },
  { stack: ["js, html"], firstName: "Alexander", lastName: "Petrov" },
  { stack: ["css, js"], firstName: "Dmitry", lastName: "Sidorov" },
];

const devs2 = [
  dimychTransform(people[0]),
  dimychTransform(people[1]),
  dimychTransform(people[2]),
];

const devs3 = people.map((person) => {
  return dimychTransform(person);
});

export const messages = people.map(
  (man) => `Hello, ${man.name.split(" ")[0]}. Welcome to IT-Incubatot`
);
