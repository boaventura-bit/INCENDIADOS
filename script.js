const video = document.querySelector('video');

video.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
});
