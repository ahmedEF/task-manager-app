import NavBar from '@/components/navBar/NavBar'
import '@/styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <> 
 <ClerkProvider {...pageProps}>
      <div className="light:black bg-gray-800 dark:text-white">
        <NavBar />
        <Component {...pageProps} />
       
      </div>
    </ClerkProvider>
  </>
 
}
