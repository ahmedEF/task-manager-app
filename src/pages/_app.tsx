import NavBar from "@/components/navBar/NavBar";
import "@/styles/globals.css";
import { api } from "@/utils/api";
import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <NavBar {...pageProps}>
        <Component {...pageProps} />
      </NavBar>
    </ClerkProvider>
  );
}
export default api.withTRPC(App);
