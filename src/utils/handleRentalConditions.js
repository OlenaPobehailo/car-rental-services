const splitRentalConditions = (string) => {
  return string.split("\n");
};

export default splitRentalConditions;

export const getAge = (string) => {
  const ageMatch = string.match(/Minimum age: (\d+)/);
  const age = ageMatch ? parseInt(ageMatch[1]) : null;
  return age;
};
