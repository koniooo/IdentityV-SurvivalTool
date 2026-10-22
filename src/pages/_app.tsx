import "styles/reset.css";
import "styles/globals.css";
import { useLayoutEffect, useEffect } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const setFillHeight = () => {
      const vh = window.innerHeight / 100;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    window.addEventListener("resize", setFillHeight);
    setFillHeight();
  }, []);

  const router = useRouter();

  useLayoutEffect(() => {
    document.documentElement.lang =
      router.pathname === "/en" || router.pathname.startsWith("/en/")
        ? "en"
        : "ja";
  }, [router.pathname]);

  return <Component {...pageProps} />;
}
