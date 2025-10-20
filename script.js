document.addEventListener('DOMContentLoaded', () => {
  const stringItems = document.querySelectorAll('.string-item');
  const presets = document.querySelectorAll('.preset');

  stringItems.forEach((item) => {
    item.addEventListener('click', () => {
      stringItems.forEach((el) => el.classList.remove('active'));
      item.classList.add('active');
    });
  });

  presets.forEach((preset) => {
    preset.addEventListener('click', () => {
      presets.forEach((el) => el.classList.remove('active'));
      preset.classList.add('active');
    });
  });
});
