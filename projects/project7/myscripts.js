// Preload images (especially logo2 and fullsize photos)
function preloadImages() {
    var files = [
      "Images/logo2.jpg",
      "Images/Fullsize/photo1.jpg",
      "Images/Fullsize/photo2.jpg",
      "Images/Fullsize/photo3.jpg"
    ];
  
    for (var i = 0; i < files.length; i++) {
      var img = new Image();
      img.src = files[i];
    }
  }
  
  // Logo rollover
  function logoOver() {
    document.getElementById("logo").src = "Images/logo2.jpg";
  }
  
  function logoOut() {
    document.getElementById("logo").src = "Images/logo.jpg";
  }
  
  // Thumbnail image swap
  function showPhoto(photoFile, photoAlt) {
    var big = document.getElementById("fullsize");
    big.src = photoFile;
    big.alt = photoAlt;
    return false; // keeps page from jumping to top
  }
  