import { fetchAllProperties } from "../function/fetches.js";

const propertyWrapper = document.getElementById("property-card");
const buttons = document.querySelectorAll(".filter-btn");

let allProperties = []; // Globalus masyvas visiems skelbimams

const buildCards = (properties) => {
  propertyWrapper.innerHTML = "";

  properties.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

  properties.forEach((p) => {
    const card = document.createElement("a");
    card.href = `/property/property.html?id=${p.id}`;
    card.setAttribute("class", "card");

    const img = document.createElement("img");
    img.src = p.imgUrl;
    img.setAttribute("class", "property-img");

    const title = document.createElement("h1");
    title.textContent = p.title;

    const price = document.createElement("h2");
    price.textContent = `${p.price}€`;

    const city = document.createElement("h2");
    city.textContent = p.city;

    propertyWrapper.append(card);
    card.append(img, title, price, city);
  });
};
// ========================================================
const initialize = async () => {
  const propertiesFromAPI = await fetchAllProperties();
  allProperties = propertiesFromAPI;
  buildCards(allProperties);

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const filterType = event.target.dataset.type;
      if (filterType === "all") {
        buildCards(allProperties);
      } else {
        const filteredProperties = allProperties.filter(
          (p) => p.type === filterType
        );
        buildCards(filteredProperties);
      }
    });
  });
};

initialize();

// ======================================================
const burgerBtn = document.getElementById("burger-btn");
const mobileBtn = document.getElementById("mobile-btn");

burgerBtn.addEventListener("click", () => {
  mobileBtn.classList.toggle("active");
});
