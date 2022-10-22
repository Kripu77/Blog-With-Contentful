import '../styles/globals.css'
import "../styles/Home.module.css";
import Script from 'next/script'
import Nav from '../components/Nav';
import Footer from '../components/Footer';

// analytics added
function MyApp({ Component, pageProps }) {

 return (
   <>
   <Nav/>
     <Script id="analytics-script"
       strategy="lazyOnload"
       src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
     />

     <Script strategy="lazyOnload" id="analytics-google">
       {`
         window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
        `}
     </Script>

     <Component {...pageProps} />
     <Footer/>
   </>
 );
}

export default MyApp
