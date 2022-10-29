import "../styles/globals.css";
import "../styles/Home.module.css";
import Script from "next/script";
import Layout from "../components/Layout/Layout";

// analytics added
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Script
          id="analytics-script"
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
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
      </Layout>
    </>
  );
}

export default MyApp;
