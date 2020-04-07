document.querySelectorAll('.card').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('container-origin');
  });
});