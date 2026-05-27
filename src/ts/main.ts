import { initNavigation } from '../components/navigation/navigation';
import { clickService } from '../components/services/service';
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  clickService();
});