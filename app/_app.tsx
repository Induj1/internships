import Script from 'next/script';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />
      <Component {...pageProps} />
    </>
  );
}
