// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp


import '../styles/globals.css'
import Head from 'next/head'
import { useEffect, useState} from 'react';
import WebLayout from '../layout/web'

// import { currentUserContext } from '../contexts/currentUserContext';
// import { AuthContext } from '../contexts/authContext';

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || WebLayout;
  // const [currUser, setCurrentUser] = useState({});
  // const [auth, setAuth] = useState();
  
  return (
    <>
      {/* <currentUserContext.Provider value={{currUser, setCurrentUser}}> */}
      {/* <AuthContext.Provider value={{auth, setAuth}}> */}
        <Head>
          <title>Fe-Sektak App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Layout>
          <div className="main-website container">
            <Component {...pageProps} />
          </div>
        </Layout>
      {/* </AuthContext.Provider> */}
      {/* </currentUserContext.Provider> */}
    </>
  )
}

export default MyApp