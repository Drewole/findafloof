import { motion } from 'framer-motion';
import AppProvider from '../components/providers/AppProvider';

import './../scss/global.scss';

function App({ Component, pageProps, router }) {
  return (
    <AppProvider>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <main>
          <Component {...pageProps} />
        </main>
      </motion.div>
    </AppProvider>
  );
}

export default App;
