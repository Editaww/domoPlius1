const title = document.getElementById("title");
const description = document.getElementById("description");
const city = document.getElementById("city");
const price = document.getElementById("price");
const img = document.getElementById("img");
const propertyType = document.getElementById("property-type");
const deleteBtn = document.getElementById("delete-btn");
const notification = document.getElementById("notification");

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

console.log(id);

const fetchpropertyById = async () => {
  try {
    const response = await fetch(
      `https://6672a64e6ca902ae11b12a1c.mockapi.io/property/${id}`
    );
    const properties = await response.json();
    return properties;
  } catch (err) {
    console.log(err);
  }
};
// =======================
const deleteProperties = async (propertyId) => {
  try {
    const response = await fetch(
      `https://6672a64e6ca902ae11b12a1c.mockapi.io/property/${propertyId}`,
      {
        method: "DELETE",
      }
    );

    const status = await response.json();
    console.log(status);
    notification.textContent = "The ad has been deleted!";

    setTimeout(() => {
      window.location.replace("../properties/properties.html");
    }, 1000);

    return property;
  } catch (err) {
    console.log(err);
  }
};

// ======================

const property = await fetchpropertyById();

title.textContent = property.title;
img.src = property.imgUrl;
description.textContent = property.description;
city.textContent = property.city;
price.textContent = `${property.price}€`;

deleteBtn.addEventListener("click", () => deleteProperties(id));
console.log(property);
