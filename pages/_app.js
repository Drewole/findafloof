import { theme, CSSReset, ChakraProvider } from '@chakra-ui/react'
import { useEffect, createContext, useState } from 'react'
import App from 'next/app'
import './../scss/general.scss'

const AuthContext = createContext();

function MyApp({ Component, pageProps }) {
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        const fetchAccessToken = async () => {
            const res = await fetch(`/api/auth-token`);
            console.log(await res.json());
        };
        fetchAccessToken
    }, []);

    return (
        <ChakraProvider theme={theme}>
            <CSSReset />
            <AuthContext.Provider>
                <Component {...pageProps} />
            </AuthContext.Provider>

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

export default MyApp