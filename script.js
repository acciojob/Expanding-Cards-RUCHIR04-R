document.querySelectorAll('.thumbnail-container img').forEach(image => {
    image.addEventListener('click', () => {
        alert(`You clicked on ${image.alt}`);
    });
});