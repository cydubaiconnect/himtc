let currentIndex = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const totalSlides = carousel.children.length;

    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const translateValue = -currentIndex * 100 + '%';
    carousel.style.transform = `translateX(${translateValue})`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Automatically advance to the next slide every 3 seconds
setInterval(nextSlide, 5000);




      // JavaScript function to handle the zoom effect
      function zoomImage() {
        var modalOverlay = document.getElementById("modal-overlay");
        var modalContent = document.getElementById("modal-content");
        var zoomedImage = document.getElementById("zoomed-image");

        
    
     
        modalContent.src = zoomedImage.src;
        modalOverlay.style.display = "flex";
        container.classList.add('show');
       
      }
    
      function zoomOut() {
        var modalOverlay = document.getElementById("modal-overlay");
    
        modalOverlay.style.display = "none";
      }