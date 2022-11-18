import { useState, useEffect } from 'react';

export default function useViewport() {
  const [breakpoint, setBreakpoint] = useState(null);

  const breakpoints = {
    xsmall: 480 + 1,
    small: 600 + 1,
    mobile: 768 + 1,
    tablet: 1025 + 1,
    medium: 1180 + 1,
    large: 1300 + 1,
    xlarge: 1600 + 1,
  };

  useEffect(() => {
    window.addEventListener('resize', throttle(150, onResize));
    onResize();
  }, []);

  const throttle = (delay, fn) => {
    let time = Date.now();

    return function throttled(e) {
      if (time + delay - Date.now() < 0) {
        fn(e);
        time = Date.now();
      }
    };
  };

  const viewport = (width) => {
    let state = null;

    for (let key in breakpoints) {
      width < breakpoints[key] && !state ? (state = key) : null;
    }

    if (state === null) {
      return 'xlarge';
    }

    return state !== breakpoint ? state : false;
  };

  const onResize = () => setBreakpoint(viewport(window.innerWidth));

  /*
    use non arrow function to use `this` context from function invocation.
    this allows us to access the state on the viewport object, not
    the state of the _windowContainer class. This is useful for 
    corretly determining what the previous viewport state was, eg
    when looking at prevProps.
  */
  function is(name) {
    return breakpoints[breakpoint] <= breakpoints[name];
  }

  function not(name) {
    return breakpoints[breakpoint] > breakpoints[name];
  }

  useEffect(() => {
    window.addEventListener('resize', throttle(300, onResize));
    return () => {
      window.removeEventListener('resize', throttle(300, onResize));
    };
  }, []);

  return { viewport: { is, not }, breakpoint };
}
