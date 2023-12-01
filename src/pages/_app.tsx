import NavBar from '@/components/navBar/NavBar'
import '@/styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <> 
 <ClerkProvider {...pageProps}>
        <NavBar {...pageProps}>
        <Component {...pageProps} />
        </NavBar>
    </ClerkProvider>
  </>
 
}
