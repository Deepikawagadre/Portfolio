window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 150) {
      sec.classList.add('visible');
    }
  });
});

document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
