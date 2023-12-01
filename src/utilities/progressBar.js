export const calculateProgressBarWidth = (productsLength) => {
  const maxProducts = productsLength;
  return (productsLength > maxProducts) * 100;
};
