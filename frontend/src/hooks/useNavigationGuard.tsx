import { useBlocker } from "react-router-dom";

export function useNavigationGuard(shouldBlock: boolean) {
  useBlocker(() => {
    if (shouldBlock) {
      return !window.confirm(
      " Ai schimbari nesalvate. Esti sigur ca vrei sa parasesti aceasta pagina?"
      );
    }
    return false;
  });
}
