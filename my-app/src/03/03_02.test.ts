import { CityType } from "../02/02_02";
import { addMoneyToBudget } from "./03";
import { demolishHousesOmTheStreet } from "./03";
import { repairHouse } from "./03";
import { addStaff } from "./03";

let city: CityType;

beforeEach(() => {
  city = {
    title: "New York",
    houses: [
      {
        id: 1,
        buildedAt: 2012,
        repaired: false,
        address: {
          number: 100,
          street: {
            title: "White street",
          },
        },
      },
      {
        id: 2,
        buildedAt: 2008,
        repaired: false,
        address: {
          number: 100,
          street: {
            title: "Happy street",
          },
        },
      },
      {
        id: 3,
        buildedAt: 2020,
        repaired: false,
        address: {
          number: 101,
          street: {
            title: "Happy street",
          },
        },
      },
    ],
    governmentBuildings: [
      {
        type: "Hospital",
        budget: 200000,
        staffCount: 200,

        address: {
          street: {
            title: "Central Str",
          },
        },
      },
      {
        type: "Fire-station",
        budget: 500000,
        staffCount: 1000,

        address: {
          street: {
            title: "South Str",
          },
        },
      },
    ],
    citizensNumber: 1000000,
  };
});

test("Budget should be changed for Hospital", () => {
  addMoneyToBudget(city.governmentBuildings[0], 100000);
  expect(city.governmentBuildings[0].budget).toBe(300000);
});

test("Budget should be changed for Fire-Station", () => {
  addMoneyToBudget(city.governmentBuildings[1], -100000);
  expect(city.governmentBuildings[1].budget).toBe(400000);
});

test("Houses shold be destroyed", () => {
  demolishHousesOmTheStreet(city, "Happy street");

  expect(city.houses.length).toBe(1);
  expect(city.houses[0].id).toBe(1);
});

test("Houses shold be repaired", () => {
  repairHouse(city.houses[1]);

  expect(city.houses[1].repaired).toBe(true);
});

test("Staff shold be increased", () => {
  addStaff(city.governmentBuildings[0], 20);

  expect(city.governmentBuildings[0].staffCount).toBe(220);
});
