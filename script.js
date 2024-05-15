document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        const animatedImage = document.querySelector('.animated-image');
        const introPosition = animatedImage.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (introPosition < screenPosition) {
            animatedImage.classList.add('active');
        }
    });
});

  