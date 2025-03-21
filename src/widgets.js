import './style.css';

document.querySelector('#app').innerHTML = `
  <div class="video-widget">
    <button id="showVideoBtn">Play Video</button>
    <div id="videoContainer" class="hidden">
      <video id="myVideo" width="640" controls>
        <source src="/public/videos/MVI_0412.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
`;

document.getElementById('showVideoBtn').addEventListener('click', () => {
  const container = document.getElementById('videoContainer');
  const video = document.getElementById('myVideo');

  container.classList.toggle('hidden');

  if (!container.classList.contains('hidden')) {
    video.play();
  } else {
    video.pause();
  }
});