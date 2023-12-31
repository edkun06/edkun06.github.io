document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('touchmove', handleTouchMove);

function handleMouseMove(e) {
    moveEyes(e.clientX, e.clientY);
}

function handleTouchMove(e) {
    const touch = e.touches[0];
    if (touch) {
        moveEyes(touch.clientX, touch.clientY);
    }
}

function moveEyes(x, y) {
    const eyes = document.querySelectorAll('.eye');

    eyes.forEach((eye) => {
        const { left, top, width, height } = eye.getBoundingClientRect();
        const eyeCenterX = left + width / 2;
        const eyeCenterY = top + height / 2;

        const angle = Math.atan2(y - eyeCenterY, x - eyeCenterX);
        const distance = Math.min(width / 4, height / 4);

        const maxRetinaMovement = 0.4; // Adjust this value to limit retina movement

        const retinaX = Math.cos(angle) * (width / 4 * maxRetinaMovement);
        const retinaY = Math.sin(angle) * (height / 4 * maxRetinaMovement);

        const retina = eye.querySelector('.retina');
        retina.style.transform = `translate(${retinaX}px, ${retinaY}px)`;
    });
}
