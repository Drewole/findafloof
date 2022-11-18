import { useState, useEffect } from 'react';
import zenscroll from 'zenscroll';

export default function useScroller(height) {
  const [scrolled, setScroll] = useState(false);

  const offsetY = () => setScroll(zenscroll.getY() > height);

  useEffect(() => {
    window.addEventListener('scroll', offsetY);
    return () => window.removeEventListener('scroll', offsetY);
  }, []);

  return scrolled;
}
