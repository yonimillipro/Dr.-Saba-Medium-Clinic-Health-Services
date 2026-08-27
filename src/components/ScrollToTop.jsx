import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const resetScroll = () => window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    resetScroll();

    const animationFrame = window.requestAnimationFrame(resetScroll);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
