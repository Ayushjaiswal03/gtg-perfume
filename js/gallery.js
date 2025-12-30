function initGallery() {
  const mainImg = document.querySelector('.gallery-main img');
  const thumbImgs = Array.from(document.querySelectorAll('.gallery-thumbs img'));
  const nextBtn = document.querySelector('.gallery-arrow.next');
  const prevBtn = document.querySelector('.gallery-arrow.prev');
  const dots = Array.from(document.querySelectorAll('.gallery-dots .dot'));

  if (!mainImg || thumbImgs.length === 0) return;

  // 🔥 Build source-of-truth array
  let images = [
    mainImg.src,
    ...thumbImgs.map(img => img.src)
  ];

  function render() {
    // Set main image
    mainImg.src = images[0];

    // Set thumbnails
    thumbImgs.forEach((img, i) => {
      img.src = images[i + 1];
    });

    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[0]?.classList.add('active');
    mainImg.classList.add('is-transitioning');

  setTimeout(() => {
    mainImg.src = images[0];

    thumbImgs.forEach((img, i) => {
      img.src = images[i + 1];
    });

    mainImg.classList.remove('is-transitioning');
  }, 180);
  }

  // NEXT → rotate left
  nextBtn.addEventListener('click', () => {
    images.push(images.shift());
    render();
  });

  // PREV → rotate right
  prevBtn.addEventListener('click', () => {
    images.unshift(images.pop());
    render();
  });

  // Thumbnail click → bring clicked image to front
  thumbImgs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      const clickedIndex = index + 1;
      images.unshift(images.splice(clickedIndex, 1)[0]);
      render();
    });
  });

  render();
}

