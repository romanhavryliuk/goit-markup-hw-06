(() => {
  const refs = {
    openBtn: document.querySelector('.menu-open-btn'),
    closeBtn: document.querySelector('.menu-close-btn'),
    menu: document.querySelector('.mob-menu'),
    body: document.querySelector('.body'),
  };

  if (!refs.openBtn || !refs.closeBtn || !refs.menu || !refs.body) {
    return;
  }

  const toggleMenu = () => {
    const isOpen = refs.menu.classList.toggle('is-open');
    refs.openBtn.classList.toggle('is-active', isOpen);
    refs.body.classList.toggle('no-scroll', isOpen);
  };

  refs.openBtn.addEventListener('click', toggleMenu);
  refs.closeBtn.addEventListener('click', toggleMenu);
  
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape' && refs.menu.classList.contains('is-open')) {
      toggleMenu();
    }
  });

})();


