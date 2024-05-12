document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".gallery-image");

    images.forEach(function(image) {
        image.addEventListener("click", function() {
            const lightbox = document.createElement("div");
            lightbox.classList.add("lightbox");

            const imageClone = image.cloneNode(true);
            imageClone.classList.remove("gallery-image"); // Remove class to avoid hover effect
            lightbox.appendChild(imageClone);

            const caption = document.createElement("div");
            caption.classList.add("lightbox-caption");
            caption.textContent = image.dataset.caption;
            lightbox.appendChild(caption);

            document.body.appendChild(lightbox);

            lightbox.addEventListener("click", function() {
                document.body.removeChild(lightbox);
            });
        });
    });
});
