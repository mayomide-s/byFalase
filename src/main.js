import './style.css';

document.querySelector('#app').innerHTML = `
  <div class="task-bar" id="taskBar">
    <div class="task-bar-inner">
      <button id="homeBtn">Home</button>
      <button>Shop</button>
      <button>Look-Book</button>
      <button>Contact</button>
      <button>Support</button>
    </div>
  </div>

  <div id="contentArea"></div>
`;

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const taskBar = document.getElementById('taskBar');
  const currentScrollY = window.scrollY;

  if (currentScrollY === 0 || currentScrollY < lastScrollY) {
    taskBar.classList.add('visible');
  } else {
    taskBar.classList.remove('visible');
  }

  lastScrollY = currentScrollY;
});

// === Video Widget Setup ===
document.getElementById('homeBtn').addEventListener('click', () => {
  document.getElementById('contentArea').innerHTML = `
    <div class="video-widget">
      <div id="videoContainer">
        <video id="myVideo" width="640" autoplay controls>
          <source src="/videos/MVI_0412.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  `;
  // Autoplay is handled by the autoplay attribute on the video element.
});