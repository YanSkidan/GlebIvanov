export function clickService(): void {
  // Список кнопок
  const buttons = document.querySelector<HTMLElement>('.services__section-nav-list');
  if (!buttons) return;

  // Делегация клика
  buttons.addEventListener('click', (event: Event) => {
    // Цель клика
    const target = event.target as HTMLElement;
    const clickedButton = target.closest<HTMLButtonElement>('.services__section-nav-item');
    if (!clickedButton || !buttons.contains(clickedButton)) return;

    // Текущая активная
    const activeButton = buttons.querySelector<HTMLButtonElement>('.services__section-nav-item.is-active');
    if (activeButton && activeButton !== clickedButton) {
      activeButton.classList.remove('is-active');
    }

    // Новая активная
    clickedButton.classList.add('is-active');
  });
}

export function revealServiceBlocks(): void {
  // Блоки для reveal
  const blocks = document.querySelectorAll<HTMLElement>(
    '.header__menu, .header__title, .header__subtitle, .header__buttons, .services__info, .services__header, .services__section'
  );
  if (!blocks.length) return;

  // Базовый класс
  blocks.forEach((block) => block.classList.add('service-reveal'));

  // Fallback старых браузеров
  if (!('IntersectionObserver' in window)) {
    blocks.forEach((block) => block.classList.add('is-visible'));
    return;
  }

  // Наблюдатель скролла
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const block = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          block.classList.add('is-visible');
        } else {
          block.classList.remove('is-visible');
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: '0px 0px -8% 0px',
    }
  );

  blocks.forEach((block) => observer.observe(block));
}