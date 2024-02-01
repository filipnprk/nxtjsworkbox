import "@/styles/globals.css";
import { useEffect } from "react";
import { GTM_ID, pageview } from "@/googleTagManager";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Load GTM script asynchronously
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Check if service workers are supported
    if ("serviceWorker" in navigator) {
      // Wait for the window to load
      window.addEventListener("load", function () {
        // Register the service worker
        navigator.serviceWorker.register("/service-worker.js").then(
          function (registration) {
            // Registration was successful
            console.log("Service Worker registered: ", registration);
          },
          function (registrationError) {
            // Registration failed
            console.log(
              "Service Worker registration failed: ",
              registrationError
            );
          }
        );
      });
    }
  }, []);

  // useEffect(() => {
  //   pageview(window.location.pathname); // Track initial page view
  // }, []);

  return (
    <>
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
