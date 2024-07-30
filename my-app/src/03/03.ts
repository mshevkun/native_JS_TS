import { StudentType } from "../02/02";
import { GovernmentBuildingsType } from "../02/02_02";
import { HouseType } from "../02/02_02";
import { CityType } from "../02/02_02";

export const addSkill = (student: StudentType, skill: string) => {
  student.technologies.push({
    id: new Date().getTime(),
    title: skill,
  });
};

export const makeStudentActive = (s: StudentType) => {
  s.isActive = true;
};

export const doesStudentLiveInCity = (s: StudentType, city: string) => {
  return s.address.city.countryTitle === city;
};

export const addMoneyToBudget = (
  building: GovernmentBuildingsType,
  amount: number
) => {
  building.budget += amount;
};

export const demolishHousesOmTheStreet = (city: CityType, street: string) => {
  city.houses = city.houses.filter(
    (house) => house.address.street.title !== street
  );
};
export const repairHouse = (house: HouseType) => {
  house.repaired = true;
};
export const addStaff = (
  governmentBuilding: GovernmentBuildingsType,
  count: number
) => {
  governmentBuilding.staffCount += count;
};
