import { chakra, theme, CSSReset, ChakraProvider } from '@chakra-ui/react'
import { useEffect, createContext, useState } from 'react'

import './../scss/general.scss'

function App({ Component, pageProps }) {
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        const fetchAccessToken = async () => {
            const res = await fetch(`/api/oauth-token`);
            const json = await res.json();
            console.log(await res.json());
            setAccessToken(json.access_token);
        };
        fetchAccessToken();

    }, []);

    return (
        <ChakraProvider theme={theme}>
            <CSSReset />

            <Component {...pageProps} />

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