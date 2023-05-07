// generates objects

for (let i = 0; i < objects.length; i++) {
  const object = objects[i];

  const image = document.createElement("img");
  image.src = object.image;

  const title = document.createElement("h5");
  title.innerText = object.title;

  const text = document.createElement("p");
  text.innerText = object.text;

  const objectElement = document.createElement("div");
  objectElement.appendChild(image);
  objectElement.appendChild(title);
  objectElement.appendChild(text);
  objectElement.classList.add("modal-div");
  document.getElementById("our-services-container").appendChild(objectElement);
}

// creates modal
const divs = document.querySelectorAll(".modal-div");

divs.forEach((div) => {
  div.addEventListener("click", () => {
    const modal = document.getElementById("myModal");

    const modalImage = document.getElementById("modal-image");
    modalImage.src = div.querySelector("img").src;

    const modalTitle = document.getElementById("modal-title");
    modalTitle.textContent = div.querySelector("h5").textContent;

    const modalText = document.getElementById("modal-text");
    modalText.textContent = div.querySelector("p").textContent;
    modal.style.display = "block";

    const close = modal.querySelector(".close");
    close.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  });
});
