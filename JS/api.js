//////generates api cards

const generateNatureImageUrl = (width, height, randomize = false) => {
  const baseImageUrl = "https://loremflickr.com/";
  let imageUrl = `${baseImageUrl}${width}/${height}/nature`;

  if (randomize) {
    const lockValue = Math.floor(Math.random() * 100000);
    imageUrl += `?lock=${lockValue}`;
  }

  return imageUrl;
};

const imageCards = document.getElementById("image-cards-container");

fetch(
  "https://fakerapi.it/api/v1/images?_quantity=16&_type=nature&_width=300&_height=200"
)
  .then((response) => response.json())
  .then((data) => {
    data.data.forEach((image) => {
      const img = document.createElement("img");
      img.src = generateNatureImageUrl(300, 200, true);
      img.alt = image.title;

      const title = document.createElement("h5");
      title.textContent = image.title;

      const description = document.createElement("p");
      description.textContent = image.description;

      const imageCard = document.createElement("imageCard");

      imageCard.appendChild(img);
      imageCard.appendChild(title);
      imageCard.appendChild(description);

      imageCards.appendChild(imageCard);
      imageCard.classList.add("image-card");
    });
  })
  .catch((error) => console.error(error));
