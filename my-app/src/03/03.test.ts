import { StudentType } from "../02/02";
import { addSkill } from "./03";
import { makeStudentActive } from "./03";
import { doesStudentLiveInCity } from "./03";

let student: StudentType;

beforeEach(() => {
  student = {
    id: 1,
    name: "Igor",
    age: 33,
    isActive: false,
    address: {
      streetTitle: "Surganova 2",
      city: {
        title: "Minsk",
        countryTitle: "Belarus",
      },
    },
    technologies: [
      {
        id: 1,
        title: "HTML",
      },
      {
        id: 2,
        title: "CSS",
      },
      {
        id: 3,
        title: "React",
      },
    ],
  };
});

test("new tech skill shold be added to student", () => {
  expect(student.technologies.length).toBe(3);
  addSkill(student, "JS");
  expect(student.technologies.length).toBe(4);
  expect(student.technologies[3].title).toBe("JS");
  expect(student.technologies[3].id).toBeDefined();
});

test("student should be active", () => {
  expect(student.isActive).toBe(false);
  makeStudentActive(student);
  expect(student.isActive).toBe(true);
});

test("does student live in city?", () => {
  const result = doesStudentLiveInCity(student, "Belarus");
  expect(result).toBe(true);
});
