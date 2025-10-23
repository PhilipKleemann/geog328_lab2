// Get the element with the class "icon"
let icon = document.getElementsByClassName("icon")[0];

// Add an event listener for the 'click' event on the icon element
icon.addEventListener('click', responsive_control);

// Function to control the responsiveness of the navigation bar
function responsive_control() {
  // Get the element with the id "myTopnav"
  let x = document.getElementById("myTopnav");

  // Check if the class name of the element is "topnav"
  if (x.className === "topnav") {
    // If it is, add the "responsive" class to the element
    x.className += " responsive";
  } else {
    // If it's not, remove the "responsive" class from the element
    x.className = "topnav";
  }
}

// Interactive pause/play button for the video
var video = document.getElementById("myVideo");

var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

// Function to toggle visibility of the description
function toggleDescription(id) {
    const desc = document.getElementById(id);
    desc.style.display = (desc.style.display === "block") ? "none" : "block";
}

const container = document.querySelector('.content_section2');

document.addEventListener('DOMContentLoaded', function () {
  const boxes = document.querySelectorAll('.climate_box');
  const container = document.querySelector('body'); // Or whichever container you want to change

  boxes.forEach(box => {
    box.addEventListener('click', function () {
      // Remove all bg-* classes from container and boxes
      container.classList.remove('bg-glaciers', 'bg-meadows', 'bg-temperate');
      boxes.forEach(b => b.classList.remove('active')); // Use 'active' for styling clicked box

      // Add 'active' class to clicked box for CSS styling
      this.classList.add('active');

      // Figure out which background to add to container
      const bg = this.getAttribute('data-bg');

      if (bg.includes('glaciers')) {
        container.classList.add('bg-glaciers');
      } else if (bg.includes('meadows')) {
        container.classList.add('bg-meadows');
      } else if (bg.includes('temperate')) {
        container.classList.add('bg-temperate');
      }

      // Change container background image via inline style (optional)
      container.style.backgroundImage = `url(${bg})`;
      container.style.backgroundSize = 'cover';
      container.style.backgroundRepeat = 'no-repeat';
      container.style.backgroundPosition = 'center';
    });
  });
});




