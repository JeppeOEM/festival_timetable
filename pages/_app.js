import "../styles/globals.css";

import { Inter } from "@next/font/google";
import Layout from "../components/Layout";

const inter = Inter({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </>
  );
}
export default MyApp;
