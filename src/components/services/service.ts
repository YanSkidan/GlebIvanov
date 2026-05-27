export function clickService(): void{
  
  const buttons = document.querySelector<HTMLElement>('.services__section-nav-list');
  if (!buttons) return;

  buttons.addEventListener('click', (event: Event)=>{
    const target = event.target as HTMLElement;
    const clickedButton = target.closest<HTMLElement>('.services__section-nav-item');
    if (!clickedButton || !buttons.contains(clickedButton)) return;
    const activeButton = buttons.querySelector<HTMLButtonElement>('.services__section-nav-item.is-active');
    if (activeButton && activeButton !== clickedButton) {
      activeButton.classList.remove('is-active');
    }
    clickedButton.classList.add('is-active');
    
  });

}