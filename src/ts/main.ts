import { initNavigation } from '../components/navigation/navigation';
import { clickService, revealServiceBlocks } from '../components/services/service';
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  clickService();
  revealServiceBlocks();
});