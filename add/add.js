const title = document.getElementById("title");
const city = document.getElementById("city");
const price = document.getElementById("price");
const type = document.getElementById("type");
const description = document.getElementById("description");
const imgUrl = document.getElementById("imgUrl");
const btn = document.getElementById("btn");
const message = document.getElementById("message");
const messageError = document.getElementById("message-error");

btn.addEventListener("click", () => {
  const priceValue = Number(price.value);

  if (!priceValue) {
    messageError.textContent = "Price must be a number!";
    messageError.style.color = "red";
    return;
  }

  const properties = {
    title: title.value,
    city: city.value,
    price: priceValue,
    type: type.value,
    description: description.value,
    imgUrl: imgUrl.value,
  };

  if (
    !properties.title ||
    !properties.city ||
    !properties.description ||
    !properties.price ||
    !properties.type ||
    !properties.imgUrl
  ) {
    messageError.textContent = "All fields must be filled!";
    messageError.style.color = "red";
    return;
  }

  console.log(properties);

  fetch("https://6672a64e6ca902ae11b12a1c.mockapi.io/property/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(properties),
  }).then((response) => {
    console.log(response);
    message.textContent = "Ad uploaded successfullly!";
    message.style.color = "green";
    setTimeout(() => {
      window.location.replace("../properties/properties.html");
    }, 1000);
  });
});
