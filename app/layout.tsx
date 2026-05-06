import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script id="gtm-head" strategy="beforeInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MP7DR84S');`}</Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800;900&family=Open+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MP7DR84S" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NJD50RKKML"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NJD50RKKML');
        `}</Script>
      </body>
    </html>
  )
}
