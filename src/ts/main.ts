import { initNavigation } from '../components/navigation/navigation';

function setAppHeight(): void {
  document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
}

document.addEventListener('DOMContentLoaded', () => {
  setAppHeight();
  initNavigation();
});

window.addEventListener('orientationchange', () => {
  window.setTimeout(setAppHeight, 250);
});