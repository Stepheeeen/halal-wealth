import { BalanceProvider } from "../context/BalanceContext";
import type { AppProps } from "next/app";

// This is your custom App component, wrapping all pages with BalanceProvider
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <BalanceProvider>
      <Component {...pageProps} />
    </BalanceProvider>
  );
};

export default MyApp;