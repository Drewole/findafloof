import { theme, CSSReset, ChakraProvider } from '@chakra-ui/react'
import { motion } from 'framer-motion';
// import { useEffect, createContext, useState } from 'react'

import './../scss/general.scss'
// export const TokenContext = createContext()

function App({ Component, pageProps, router }) {
    // const [accessToken, setAccessToken] = useState(null);

    // useEffect(() => {
    //     const fetchAccessToken = async () => {
    //         const res = await fetch(`/api/oauth-token`);
    //         const json = await res.json();
    //         setAccessToken(json);
    //     };
    //     fetchAccessToken();
    // }, []);

    return (
        <ChakraProvider theme={theme}>

            <CSSReset />
            {/* <TokenContext.Provider value={accessToken}> */}
            <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
                pageInitial: {
                    opacity: 0,
                },
                pageAnimate: {
                    opacity: 1,
                },
            }}>
                <Component {...pageProps} />
            </motion.div>
            {/* </TokenContext.Provider> */}
        </ChakraProvider>

    )
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

export default App