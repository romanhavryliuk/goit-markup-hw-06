(() => {
  // Збираємо всі референси в об'єкт
  const refs = {
    // Додати атрибут .menu-open-btn на кнопку відкриття
    openBtn: document.querySelector('.menu-open-btn'),
    // Додати атрибут .menu-close-btn на кнопку закриття
    closeBtn: document.querySelector('.menu-close-btn'),
    // Додати атрибут .mob-menu на бекдроп мобільного меню
    menu: document.querySelector('.mob-menu'),
    // Додаємо body для керування скролом
    body: document.body,
  };
  // Перевірка чи всі елементи існують
  if (!refs.openBtn || !refs.closeBtn || !refs.menu || !refs.body) {
    // Якщо будь-який з елементів не знайдено, припиняємо виконання скрипта
    return;
  }
  // Функція для тоглу меню
  const toggleMenu = () => {
    // Тогл класу is-open на бекдропі, menuIsOpen зберігає новий стан (true якщо відкрито)
    const menuIsOpen = refs.menu.classList.toggle('is-open');
    // Перевіряємо чи є клас is-open на бекдропі
    refs.openBtn.classList.toggle('is-active', menuIsOpen);
    // Забираємо скрол коли меню відкрите
    refs.body.classList.toggle('no-scroll', menuIsOpen);
  };
  // Відкриваємо меню при кліку на кнопку
  refs.openBtn.addEventListener('click', toggleMenu);
  // Закриваємо меню при кліку на бекдроп
  refs.closeBtn.addEventListener('click', toggleMenu);

})();


