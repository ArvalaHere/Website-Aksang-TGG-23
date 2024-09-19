let autoSlideInterval;

// Fungsi untuk memulai slider otomatis
function showSlides() {
  let slides = document.querySelectorAll('.slides img');
  let dots = document.querySelectorAll('.dot');
  
  slides.forEach((slide, i) => {
    slide.style.display = "none";
    dots[i].classList.remove("active-dot");
  });

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active-dot");

  // Ulangi fungsi setiap 5 detik
  autoSlideInterval = setTimeout(showSlides, 5000);
}

let slideIndex = 1;
showSlides(slideIndex);

// Fungsi untuk menampilkan slide
function showSlides(n) {
  let i;
  const slides = document.querySelectorAll('.slides img');
  const dots = document.querySelectorAll('.dot');

  if (n > slides.length) { 
    slideIndex = 1;
  }
  if (n < 1) { 
    slideIndex = slides.length;
  }

  // Sembunyikan semua gambar
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  // Hilangkan class 'active' dari semua dots
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active-dot');
  }

  // Tampilkan gambar yang sesuai dan tambahkan class 'active'
  slides[slideIndex - 1].classList.add('active');
  dots[slideIndex - 1].classList.add('active-dot');
}

// Fungsi untuk tombol prev dan next
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Fungsi untuk dot navigation
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Otomatis slide setiap 10 detik
setInterval(function() {
  plusSlides(1);
}, 10000);
