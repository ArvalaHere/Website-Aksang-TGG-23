const carouselWrapper = document.getElementById('carouselWrapper');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let currentSlide = 0;
let startX = 0;

// Fungsi untuk navigasi ke slide berikutnya
const goToNextSlide = () => {
  const totalSlides = carouselWrapper.children.length;
  currentSlide = (currentSlide + 1) % totalSlides;
  carouselWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
};

// Fungsi untuk navigasi ke slide sebelumnya
const goToPrevSlide = () => {
  const totalSlides = carouselWrapper.children.length;
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  carouselWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
};

// Event listener untuk tombol navigasi
nextBtn.addEventListener('click', goToNextSlide);
prevBtn.addEventListener('click', goToPrevSlide);

// Event listener untuk gesture swipe (mobile)
carouselWrapper.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX; // Simpan posisi awal sentuhan
});

carouselWrapper.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX; // Simpan posisi akhir sentuhan
  if (startX > endX + 50) { // Swipe ke kiri (geser ke slide berikutnya)
    goToNextSlide();
  } else if (startX < endX - 50) { // Swipe ke kanan (geser ke slide sebelumnya)
    goToPrevSlide();
  }
});
