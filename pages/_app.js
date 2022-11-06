import { theme, CSSReset, ChakraProvider } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import AppProvider from '../components/providers/AppProvider';
import ViewportProvider from '../components/providers/ViewportProvider';
import ModalProvider from '../components/providers/ModalProvider';

import './../scss/_global.scss';

function App({ Component, pageProps, router }) {
  return (
    <AppProvider>
      <ModalProvider>
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
          <Component {...pageProps} />
        </motion.div>
      </ModalProvider>
    </AppProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default App;
