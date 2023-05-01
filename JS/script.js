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

  document.getElementById("our-services-container").appendChild(objectElement);
}
