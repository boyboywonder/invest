function toggleMenu(hiddenMenu) {
  var menu = document.getElementById('hiddenMenu');
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
}
