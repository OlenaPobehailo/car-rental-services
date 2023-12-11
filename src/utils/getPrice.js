export const getPrice = (string) => {
  const price = Number(string.split("$")[1]);
  return price;
};
