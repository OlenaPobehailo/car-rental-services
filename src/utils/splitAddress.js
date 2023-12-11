export const getCity = (address) => {
  const parts = address.split(",");
  const city = parts[parts.length - 2].trim();
  return city;
};

export const getCountry = (address) => {
  const parts = address.split(",");
  const country = parts[parts.length - 1].trim();
  return country;
};
