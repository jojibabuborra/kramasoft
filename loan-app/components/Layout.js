import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../createEmotionCache';
import Header from './header/header'
import { theme } from '../theme'

const clientSideEmotionCache = createEmotionCache();
function Layout(props) {
  const emotionCache = clientSideEmotionCache;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="flex min-h-screen flex-col items-center justify-center py-2 text-gray-500">
            <Header />
            <br/>
 
             <div className="border-4 border-indigo-500 ...">
            <div className="container">
              {props.children}
            </div>
            </div>
                       
            <footer className="flex h-24 w-full items-center justify-center border-t">
              <a
                className="flex items-center justify-center"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer">
                Powered by {'   '} <b class="text-red-700 p-2"> Krama Soft </b>             
              </a>
            </footer>

          </div>
      </ThemeProvider>
    </CacheProvider>
  )
}
export default Layout
