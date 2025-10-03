// Mobile nav drawer
const navToggle = document.getElementById('navToggle');
const drawer = document.getElementById('drawer');

navToggle?.addEventListener('click', () => {
  const open = drawer.style.display === 'block';
  drawer.style.display = open ? 'none' : 'block';
  navToggle.setAttribute('aria-expanded', (!open).toString());
});

drawer?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => (drawer.style.display = 'none'));
});

// Small scroll shadow for topbar
const topbar = document.querySelector('.topbar');
const onScroll = () => {
  if (window.scrollY > 6) {
    topbar.style.boxShadow = '0 6px 20px rgba(2,6,23,.06)';
    topbar.style.background = '#ffffff';
  } else {
    topbar.style.boxShadow = 'none';
    topbar.style.background = 'transparent';
  }
};
window.addEventListener('scroll', onScroll);
onScroll();
