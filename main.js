document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.querySelector('.video-preview-container');
    const video = document.querySelector('.video-preview');
    const overlay = document.querySelector('.video-overlay');

    videoContainer.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            overlay.style.opacity = '0';
        } else {
            video.pause();
            overlay.style.opacity = '1';
        }
    });

    //  Auto-play on hover and reset on mouse leave
    videoContainer.addEventListener('mouseenter', () => {
        video.play();
        overlay.style.opacity = '0';
    });

    videoContainer.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; 
        overlay.style.opacity = '1';
    });
});