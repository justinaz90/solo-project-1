{
  /* Sidebar */

  function toggleMenu(visible) {
    document.querySelector('.sidebar-menu').classList.toggle('show', visible);
  }

  document.querySelector('.hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu();
  });
}
