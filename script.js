
window.onload = function() {
  const heroSection = document.querySelector('.hero');

  if (heroSection) {
    // The hero section element exists, proceed with the slideshow logic
    const imageUrls = [
      "images/pexels-junior-teixeira-1064069-2047905.jpg",
      "images/pexels-kevin-ku-92347-577585.jpg",
      "images/pexels-mikechie-esparagoza-749296-1601773.jpg",
      // Add more image URLs as needed
    ];

    function changeBackgroundImage() {
      const randomIndex = Math.floor(Math.random() * imageUrls.length);
      heroSection.style.backgroundImage = `url(${imageUrls[randomIndex]})`;
    }

    changeBackgroundImage();
    setInterval(changeBackgroundImage, 2000);
  } else {
    console.error("Hero section not found.");
  }
};
howImage(0); // Show the first image initially

// Set the interval time in milliseconds (e.g., 5000 for 5 seconds)
const intervalTime = 5000;
setInterval(changeBackgroundImage, intervalTime);

