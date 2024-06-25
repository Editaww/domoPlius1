export const fetchAllProperties = async () => {
  try {
    const response = await fetch(
      "https://6672a64e6ca902ae11b12a1c.mockapi.io/property"
    );
    const property = await response.json();
    console.log(property);
    return property;
  } catch (err) {
    console.log(err);
  }
};
