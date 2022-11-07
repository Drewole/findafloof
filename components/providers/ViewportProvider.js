import { createContext, useContext, useState, useEffect } from 'react';
import { debounce } from '../utils/helpers';

const ViewportContext = createContext({});

const BREAKPOINTS = {
  xsmall: 480,
  small: 600,
  mobile: 768,
  tablet: 1000,
  medium: 1180,
  large: 1300,
  xlarge: 1600,
};

export function ViewportProvider({ children }) {
  const [breakpoint, setBreakpoint] = useState(null);

  useEffect(() => {
    const resizeFn = debounce(150, onResize);
    window.addEventListener('resize', resizeFn);

    onResize();

    return () => window.removeEventListener('resize', resizeFn);
  }, []);

  const viewport = (width) => {
    let state = null;

    for (let key in BREAKPOINTS) {
      width < BREAKPOINTS[key] && !state ? (state = key) : null;
    }

    if (state === null) {
      return 'xxlarge';
    }

    return state !== breakpoint ? state : false;
  };

  const onResize = () => setBreakpoint(viewport(window.innerWidth));

  const is = (name) => BREAKPOINTS[breakpoint] <= BREAKPOINTS[name];

  const not = (name) => BREAKPOINTS[breakpoint] > BREAKPOINTS[name];

  return (
    <ViewportContext.Provider
      value={{
        viewport: {
          is,
          not,
        },
        breakpoint,
      }}
    >
      {children}
    </ViewportContext.Provider>
  );
}

export default function useViewportContext() {
  return useContext(ViewportContext);
}
