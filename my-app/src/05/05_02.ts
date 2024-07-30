import { GovernmentBuildingsType } from "../02/02_02";
import { HouseType } from "../02/02_02";

export const getStreetsTitlesOfGovernmentBuildings = (
  buildings: GovernmentBuildingsType[]
) => {
  return buildings.map((building) => building.address.street.title);
};

export const getStreetsTitlesOfHouses = (houses: HouseType[]) => {
  return houses.map((house) => house.address.street.title);
};

export const createMessages = (houses: HouseType[]) => {
  return houses.map(
    (house) => `Hello, people from ${house.address.street.title}`
  );
};
