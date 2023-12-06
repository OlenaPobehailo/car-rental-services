export const isPremium = accessories => {
  return accessories.some(accessory => accessory.toLowerCase().includes('premium'));
};
