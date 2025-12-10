// ========================================
// CONFIGURATION AREA - EASY CUSTOMIZATION
// ========================================

// VIDEO CONFIGURATION - Add your YouTube video IDs here
const videos = [
  {
    id: "9zC1Cmmal80",
    title: "Heartwarming Anniversary Video 🎥✨ ||OFFICIAL VIDEO",
  },
  {
    id: "DtqF4SRmH0g",
    title: "Anniversary Teaser | A Special Celebration Awaits! 🎉✨",
  },
  {
    id: "vKAFEPOtAlk",
    title: "Adorable Baby Shoot | Cinematic Moments Captured in Pure Joy💘 ",
  },
];
// MUSIC SECTION - Add your YouTube music video IDs here
const musicVideos = [
  { id: "JNtTt0oioT8", title: "TERA INTEZAAR" },
  { id: "folFzqmf4WU", title: "TERA MERA PAYAAR" },
  { id: "IoyMTSysNjk", title: "TANHA DIL" },
  { id: "5vfuRNapsM4", title: "TERI YAADON MAIN " },
  { id: "emQOtvyQ3F8", title: "Teri Mushkaan - " },
  { id: "wvLZ9DNwC84", title: "Apni Taqdeer:  " },
  { id: "Sd2fP06gSfM", title: "ANDHERA (Darkness)||  " },
  { id: "EP-zbXM_QxE", title: "Gali Ke King –" },
  { id: "-kKY-J9n8UY", title: "Mera Dil Toota ||  " },
];
// Auto-generate Music Video Cards
const musicGrid = document.getElementById("musicGrid");

musicVideos.forEach((video) => {
  musicGrid.innerHTML += `
        <div class="video-card">
            <iframe 
                src="https://www.youtube.com/embed/${video.id}" 
                frameborder="0" 
                allowfullscreen>
            </iframe>
            <h3 class="video-title">${video.title}</h3>
        </div>
    `;
});

// PHOTO CONFIGURATION - Add your photo URLs and categories here
const photos = [
  { url: "photography/apu1.jpg", category: "portrait" },
  { url: "photography/biye look.jpeg", category: "portrait" },
  { url: "photography/view.jpg", category: "nature" },
  { url: "photography/sector v.jpg", category: "nature" },
  { url: "photography/street.jpg", category: "street" },
  { url: "photography/panskura college.jpg", category: "street" },
  { url: "photography/night.jpg", category: "creative" },
  {
    url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600",
    category: "creative",
  },
  { url: "photography/ashok .jpg", category: "portrait" },
  { url: "photography/Panjabi.jpg", category: "portrait" },
  { url: "photography/sun set 2.jpg", category: "nature" },
  { url: "photography/red flower.jpg", category: "street" },
  { url: "photography/moon.jpg", category: "creative" },
];

// ========================================
// PRELOADER
// ========================================
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".preloader").classList.add("hidden");
  }, 1500);
});

// ========================================
/// THEME TOGGLE
// ========================================
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.getElementById("theme-icon");

const savedTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", savedTheme);

// Set initial icon
themeIcon.src =
  savedTheme === "dark"
    ? "brightness logo/dark.png"
    : "brightness logo/light.svg";

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Change icon for light/dark mode
  themeIcon.src =
    newTheme === "dark"
      ? "brightness logo/dark.png"
      : "brightness logo/light.svg";
});

// MOBILE MENU
// ========================================
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// ========================================
// STICKY NAVBAR & ACTIVE LINK
// ========================================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Active nav link
  const sections = document.querySelectorAll("section");
  const navLinksAll = document.querySelectorAll(".nav-link");

  sections.forEach((section) => {
    const top = section.offsetTop - 100;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (window.scrollY >= top && window.scrollY < top + height) {
      navLinksAll.forEach((link) => link.classList.remove("active"));
      document
        .querySelector(`.nav-link[href="#${id}"]`)
        ?.classList.add("active");
    }
  });
});

// ========================================
// HERO SLIDESHOW
// ========================================
const slides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 5000);

// ========================================
// SCROLL REVEAL ANIMATION
// ========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, observerOptions);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ========================================
// VIDEO GRID GENERATION
// ========================================
const videoGrid = document.getElementById("videoGrid");

videos.forEach((video) => {
  const videoCard = document.createElement("div");
  videoCard.className = "video-card";
  videoCard.innerHTML = `
                <img src="https://img.youtube.com/vi/${video.id}/maxresdefault.jpg" 
                     alt="${video.title}" 
                     class="video-thumbnail" 
                     loading="lazy">
                <div class="video-overlay">
                    <div class="play-icon">▶</div>
                </div>
                <div class="video-title">${video.title}</div>
            `;

  videoCard.addEventListener("click", () => openVideo(video.id));
  videoGrid.appendChild(videoCard);
});

// ========================================
// VIDEO MODAL
// ========================================
const videoModal = document.getElementById("videoModal");
const videoPlayer = document.getElementById("videoPlayer");
const modalClose = document.getElementById("modalClose");

function openVideo(videoId) {
  videoPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  videoModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeVideo() {
  videoPlayer.src = "";
  videoModal.classList.remove("active");
  document.body.style.overflow = "auto";
}

modalClose.addEventListener("click", closeVideo);
videoModal.addEventListener("click", (e) => {
  if (e.target === videoModal) closeVideo();
});

// ========================================
// PHOTO GRID GENERATION
// ========================================
const photoGrid = document.getElementById("photoGrid");

function renderPhotos(filter = "all") {
  photoGrid.innerHTML = "";
  const filteredPhotos =
    filter === "all" ? photos : photos.filter((p) => p.category === filter);

  filteredPhotos.forEach((photo) => {
    const photoCard = document.createElement("div");
    photoCard.className = "photo-card";
    photoCard.setAttribute("data-category", photo.category);
    photoCard.innerHTML = `
                    <img src="${photo.url}" alt="${photo.category}" loading="lazy">
                    <div class="photo-category-label">${photo.category}</div>
                `;

    photoCard.addEventListener("click", () => openLightbox(photo.url));
    photoGrid.appendChild(photoCard);
  });
}

renderPhotos();

// ========================================
// PHOTO FILTERS
// ========================================
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderPhotos(btn.dataset.filter);
  });
});

// ========================================
// LIGHTBOX
// ========================================
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

function openLightbox(src) {
  lightboxImage.src = src;
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = "auto";
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

// ========================================
// TESTIMONIALS SLIDER
// ========================================
const testimonialCards = document.querySelectorAll(".testimonial-card");
const testimonialDots = document.querySelectorAll(".testimonial-dot");
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonialCards.forEach((card) => card.classList.remove("active"));
  testimonialDots.forEach((dot) => dot.classList.remove("active"));

  testimonialCards[index].classList.add("active");
  testimonialDots[index].classList.add("active");
}

testimonialDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentTestimonial = index;
    showTestimonial(currentTestimonial);
  });
});

setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
  showTestimonial(currentTestimonial);
}, 5000);

// ========================================
// CONTACT FORM VALIDATION & EMAIL SUBMISSION
// ========================================
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  let isValid = true;

  // Name validation
  if (name === "") {
    document.getElementById("nameError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("nameError").style.display = "none";
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("emailError").style.display = "none";
  }

  // Message validation
  if (message === "") {
    document.getElementById("messageError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("messageError").style.display = "none";
  }

  if (isValid) {
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoLink = `mailto:apurbagoswami211@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    alert(
      "Thank you for your message! Your email client will open to send the message."
    );
    contactForm.reset();
  }
});

// ========================================
// BACK TO TOP BUTTON
// ========================================
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ========================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
