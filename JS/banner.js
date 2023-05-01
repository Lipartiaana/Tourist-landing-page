const images = [
  "../Assets/banner/1.png",
  "../Assets/banner/2.png",
  "../Assets/banner/3.png",
  "../Assets/banner/4.png",
  "../Assets/banner/5.png",
];

const bannerImage = document.getElementById("banner-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentImageIndex = 0;

function showCurrentImage() {
  bannerImage.src = images[currentImageIndex];
}

function showNextImage() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  showCurrentImage();
}

function showPrevImage() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  showCurrentImage();
}

prevBtn.addEventListener("click", showPrevImage);
nextBtn.addEventListener("click", showNextImage);

showCurrentImage();
