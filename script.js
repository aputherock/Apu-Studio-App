// ========================================
// CONFIGURATION AREA - EASY CUSTOMIZATION
// ========================================

// Initialize EmailJS - IMPORTANT: Replace with YOUR EmailJS credentials
// (function () {
//   // Your EmailJS Public Key
//   emailjs.init("mYfEJI7RvV0qw8XmZ");
// })();

// // EmailJS Configuration
// const EMAILJS_SERVICE_ID = "service_1qpn3m5";
// const EMAILJS_TEMPLATE_ID = "template_nqyae7p";
// const YOUR_EMAIL = "apurbagoswami211@gmail.com";

// VIDEO CONFIGURATION
const videos = [
  { id: "nF9DIkHcHD8", title: "Cinematography 💥|| OFFICIAL VIDEO ||LISTENIFY #dhurandhar" },
  { id: "9zC1Cmmal80", title: "Heartwarming Anniversary Video 🎥✨ ||OFFICIAL VIDEO" },
  { id: "DtqF4SRmH0g", title: "Anniversary Teaser | A Special Celebration Awaits! 🎉✨" },
  { id: "vKAFEPOtAlk", title: "Adorable Baby Shoot | Cinematic Moments Captured in Pure Joy💘" },
];

// MUSIC CONFIGURATION
const musicVideos = [
  { id: "gk15Eek9WQo", title: "Love Dose 💥||90's Bollywood style song ||" },
  { id: "JNtTt0oioT8", title: "TERA INTEZAAR" },
  { id: "folFzqmf4WU", title: "TERA MERA PAYAAR" },
  { id: "IoyMTSysNjk", title: "TANHA DIL" },
  { id: "5vfuRNapsM4", title: "TERI YAADON MAIN" },
  { id: "emQOtvyQ3F8", title: "Teri Mushkaan -" },
  { id: "wvLZ9DNwC84", title: "Apni Taqdeer:" },
  { id: "Sd2fP06gSfM", title: "ANDHERA (Darkness)||" },
  { id: "EP-zbXM_QxE", title: "Gali Ke King —" },
  { id: "-kKY-J9n8UY", title: "Mera Dil Toota ||" },
];

// PHOTO CONFIGURATION
const photos = [
  { url: "photography/apu1.jpg", category: "portrait" },
  { url: "photography/biye look.jpeg", category: "portrait" },
  { url: "photography/view.jpg", category: "nature" },
  { url: "photography/sector v.jpg", category: "nature" },
  { url: "photography/street.jpg", category: "street" },
  { url: "photography/panskura college.jpg", category: "street" },
  { url: "photography/night.jpg", category: "creative" },
  { url: "photography/white flower.jpg", category: "creative" },
  { url: "photography/ashok .jpg", category: "portrait" },
  { url: "photography/Panjabi.jpg", category: "portrait" },
  { url: "photography/sun set 2.jpg", category: "nature" },
  { url: "photography/red flower.jpg", category: "street" },
  { url: "photography/moon.jpg", category: "creative" },
];

// ========================================
// CHRISTMAS POPUP (AUTO LOAD)
// CHRISTMAS POPUP (BROWSER SAFE VERSION)
// ========================================
let christmasAudio;

window.addEventListener("load", () => {
  const popup = document.getElementById("christmasPopup");
  const closeBtn = document.getElementById("christmasClose");

  // Create audio
  christmasAudio = new Audio("Audio/bg songs.mp3");
  christmasAudio.loop = true;
  christmasAudio.volume = 0.6;
  christmasAudio.muted = true; // 🔥 KEY POINT

  // Show popup
  setTimeout(() => {
    popup.classList.add("active");

    // Autoplay muted (browser allows)
    christmasAudio.play().catch(() => {
      console.log("Muted autoplay blocked (rare)");
    });
  }, 1200);

  // 👉 Any click on popup = enable sound
  popup.addEventListener("click", () => {
    if (christmasAudio.muted) {
      christmasAudio.muted = false;
      console.log("Sound enabled by user");
    }
  });

  // ❌ Close popup = STOP MUSIC COMPLETELY
  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // VERY IMPORTANT

    popup.classList.remove("active");

    christmasAudio.pause();
    christmasAudio.currentTime = 0;
    christmasAudio.muted = true;
  });
});



// ========================================
// PRELOADER
// ========================================
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".preloader").classList.add("hidden");
  }, 1500);
});

// ========================================
// THEME TOGGLE
// ========================================
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.getElementById("theme-icon");

const savedTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", savedTheme);

themeIcon.src = savedTheme === "dark" ? "brightness logo/dark.png" : "brightness logo/light.svg";

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  themeIcon.src = newTheme === "dark" ? "brightness logo/dark.png" : "brightness logo/light.svg";
});

// ========================================
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

  const sections = document.querySelectorAll("section");
  const navLinksAll = document.querySelectorAll(".nav-link");

  sections.forEach((section) => {
    const top = section.offsetTop - 100;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (window.scrollY >= top && window.scrollY < top + height) {
      navLinksAll.forEach((link) => link.classList.remove("active"));
      document.querySelector(`.nav-link[href="#${id}"]`)?.classList.add("active");
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
// CINEMATOGRAPHY VIDEO GRID
// ========================================
const videoGrid = document.getElementById("videoGrid");
const allVideos = [...videos, ...videos];

allVideos.forEach((video) => {
  const videoCard = document.createElement("div");
  videoCard.className = "video-card-slider";
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

videoGrid.style.display = "flex";
videoGrid.style.gap = "2rem";
videoGrid.style.animation = "slideHorizontal 40s linear infinite";
videoGrid.style.width = "max-content";

// ========================================
// MUSIC SECTION WITH POPUP PLAYER
// ========================================
const musicGrid = document.getElementById("musicGrid");
const musicPopup = document.getElementById("musicPopup");
const musicPopupClose = document.getElementById("musicPopupClose");
const musicPlayer = document.getElementById("musicPlayer");
const currentSongTitle = document.getElementById("currentSongTitle");
const playPauseBtn = document.getElementById("playPauseBtn");
const progressBar = document.getElementById("progressBar");
const progressInput = document.getElementById("progressInput");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const volumeSlider = document.getElementById("volumeSlider");

let currentMusicId = null;
let isPlaying = false;
let currentPlayer = null;
let progressInterval = null;

// Render music cards
const allMusicVideos = [...musicVideos, ...musicVideos];

allMusicVideos.forEach((video) => {
  const musicCard = document.createElement("div");
  musicCard.className = "music-card-slider";
  musicCard.innerHTML = `
    <div class="music-embed-wrapper">
      <img src="https://img.youtube.com/vi/${video.id}/maxresdefault.jpg" alt="${video.title}" class="music-thumbnail">
      <div class="music-play-overlay">
        <i class="fas fa-play"></i>
      </div>
    </div>
    <h3 class="video-title">${video.title}</h3>
  `;
  
  musicCard.addEventListener("click", () => openMusicPopup(video.id, video.title));
  musicGrid.appendChild(musicCard);
});

musicGrid.style.display = "flex";
musicGrid.style.gap = "1.5rem";
musicGrid.style.animation = "slideHorizontal 50s linear infinite";
musicGrid.style.width = "max-content";

// Format time (seconds to mm:ss)
function formatTime(seconds) {
  if (isNaN(seconds) || seconds === 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Start progress tracking
function startProgressTracking() {
  if (progressInterval) clearInterval(progressInterval);
  
  progressInterval = setInterval(() => {
    if (currentPlayer && currentPlayer.getDuration) {
      try {
        const currentTime = currentPlayer.getCurrentTime();
        const duration = currentPlayer.getDuration();
        
        if (duration > 0) {
          const progress = (currentTime / duration) * 100;
          progressBar.style.width = progress + "%";
          progressInput.value = progress;
          
          currentTimeEl.textContent = formatTime(currentTime);
          durationEl.textContent = formatTime(duration);
        }
      } catch (e) {
        // Player not ready yet
      }
    }
  }, 500);
}

// Stop progress tracking
function stopProgressTracking() {
  if (progressInterval) {
    clearInterval(progressInterval);
    progressInterval = null;
  }
  progressBar.style.width = "0%";
  progressInput.value = 0;
  currentTimeEl.textContent = "0:00";
  durationEl.textContent = "0:00";
}

// Open music popup
function openMusicPopup(videoId, title) {
  currentMusicId = videoId;
  currentSongTitle.textContent = title;
  musicPopup.classList.add("active");
  document.body.style.overflow = "hidden";
  
  // Load YouTube Player API if not already loaded
  if (!window.YT) {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
  
  // Wait for API and create player
  setTimeout(() => {
    if (currentPlayer) {
      currentPlayer.destroy();
    }
    
    // Create a container for the player
    musicPlayer.innerHTML = "";
    const playerDiv = document.createElement("div");
    playerDiv.id = "ytplayer";
    musicPlayer.appendChild(playerDiv);
    
    if (window.YT && window.YT.Player) {
      currentPlayer = new YT.Player('ytplayer', {
        height: '0',
        width: '0',
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
        },
        events: {
          onReady: function(event) {
            event.target.playVideo();
            isPlaying = true;
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            startProgressTracking();
            
            // Set volume
            const volume = volumeSlider.value;
            event.target.setVolume(volume);
          },
          onStateChange: function(event) {
            if (event.data === YT.PlayerState.PLAYING) {
              isPlaying = true;
              playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
              startProgressTracking();
            } else if (event.data === YT.PlayerState.PAUSED) {
              isPlaying = false;
              playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            } else if (event.data === YT.PlayerState.ENDED) {
              isPlaying = false;
              playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
              stopProgressTracking();
            }
          }
        }
      });
    } else {
      // Fallback: use iframe embed
      musicPlayer.innerHTML = `<iframe id="ytplayer" width="0" height="0" src="https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&enablejsapi=1" allow="autoplay" frameborder="0"></iframe>`;
      isPlaying = true;
      playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
      
      // Simulated progress (since we can't access iframe data without API)
      let simulatedTime = 0;
      progressInterval = setInterval(() => {
        simulatedTime += 0.5;
        const simulatedDuration = 180; // assume 3 minutes
        const progress = (simulatedTime / simulatedDuration) * 100;
        progressBar.style.width = Math.min(progress, 100) + "%";
        progressInput.value = Math.min(progress, 100);
        currentTimeEl.textContent = formatTime(simulatedTime);
        durationEl.textContent = formatTime(simulatedDuration);
      }, 500);
    }
  }, 500);
}

// Close music popup
function closeMusicPopup() {
  musicPopup.classList.remove("active");
  document.body.style.overflow = "auto";
  
  if (currentPlayer && currentPlayer.stopVideo) {
    currentPlayer.stopVideo();
    currentPlayer.destroy();
  }
  
  musicPlayer.innerHTML = "";
  currentPlayer = null;
  currentMusicId = null;
  isPlaying = false;
  playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
  stopProgressTracking();
}

musicPopupClose.addEventListener("click", closeMusicPopup);
musicPopup.addEventListener("click", (e) => {
  if (e.target === musicPopup) closeMusicPopup();
});

// Play/Pause toggle
playPauseBtn.addEventListener("click", () => {
  if (currentPlayer && currentPlayer.getPlayerState) {
    if (isPlaying) {
      currentPlayer.pauseVideo();
      isPlaying = false;
      playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
      currentPlayer.playVideo();
      isPlaying = true;
      playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
  }
});

// Progress bar seek
progressInput.addEventListener("input", (e) => {
  if (currentPlayer && currentPlayer.getDuration) {
    const duration = currentPlayer.getDuration();
    const seekTime = (e.target.value / 100) * duration;
    currentPlayer.seekTo(seekTime, true);
  }
});

// Volume control
volumeSlider.addEventListener("input", (e) => {
  const volume = e.target.value;
  if (currentPlayer && currentPlayer.setVolume) {
    currentPlayer.setVolume(volume);
  }
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
// PHOTOGRAPHY SECTION
// ========================================
const photoGrid = document.getElementById("photoGrid");

function renderPhotos(filter = "all") {
  photoGrid.innerHTML = "";
  const filteredPhotos = filter === "all" ? photos : photos.filter((p) => p.category === filter);
  const allPhotos = [...filteredPhotos, ...filteredPhotos];

  allPhotos.forEach((photo) => {
    const photoCard = document.createElement("div");
    photoCard.className = "photo-card-slider";
    photoCard.setAttribute("data-category", photo.category);
    photoCard.innerHTML = `
      <img src="${photo.url}" alt="${photo.category}" loading="lazy">
      <div class="photo-category-label">${photo.category}</div>
    `;

    photoCard.addEventListener("click", () => openLightbox(photo.url));
    photoGrid.appendChild(photoCard);
  });

  photoGrid.style.display = "flex";
  photoGrid.style.gap = "1.5rem";
  photoGrid.style.animation = "slideHorizontal 45s linear infinite";
  photoGrid.style.width = "max-content";
}

renderPhotos();

// Photo filters
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
// // CONTACT FORM - EMAIL INTEGRATION
// // ========================================
// const contactForm = document.getElementById("contactForm");

// contactForm.addEventListener("submit", function (e) {
//   e.preventDefault();

//   // Get form values
//   const name = document.getElementById("name").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const message = document.getElementById("message").value.trim();

//   // Validate form
//   if (!name || !email || !message) {
//     showNotification("❌ Please fill in all fields!", "error");
//     return;
//   }

//   // Validate email format
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     showNotification("❌ Please enter a valid email address!", "error");
//     return;
//   }

//   // Show loading state
//   const submitBtn = contactForm.querySelector('button[type="submit"]');
//   const originalText = submitBtn.innerHTML;
//   submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
//   submitBtn.disabled = true;

//   // Prepare email parameters
//   const templateParams = {
//     from_name: name,
//     from_email: email,
//     message: message,
//     to_email: YOUR_EMAIL,
//     to_name: "Apurba Goswami"
//   };

//   // Send email using EmailJS
//   emailjs.send(service_1qpn3m5,template_nqyae7p, templateParams)
//     .then(
//       (response) => {
//         console.log("SUCCESS!", response.status, response.text);
//         // Success animation
//         showNotification("✅ Message sent successfully! I'll get back to you soon.", "success");
//         contactForm.reset();
//         submitBtn.innerHTML = originalText;
//         submitBtn.disabled = false;
//       },
//       (error) => {
//         console.error("FAILED...", error);
//         // Error animation
//         showNotification("❌ Failed to send message. Please try emailing directly to " + YOUR_EMAIL, "error");
//         submitBtn.innerHTML = originalText;
//         submitBtn.disabled = false;
//       }
//     );
// });

// Notification function
function showNotification(message, type) {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("show");
  }, 100);

  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

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
// SMOOTH SCROLL
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

// ========================================
// KEYBOARD SHORTCUTS
// ========================================
document.addEventListener("keydown", (e) => {
  // ESC key to close modals
  if (e.key === "Escape") {
    closeVideo();
    closeLightbox();
    closeMusicPopup();
    if (document.getElementById("christmasPopup").classList.contains("active")) {
      document.getElementById("christmasClose").click();
    }
  }
});