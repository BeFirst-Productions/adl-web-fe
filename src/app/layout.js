import BackToTopButton from '@/Components/Common/BackToTopButton'
import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'ADL Business Solutions',
  description:
    'Professional business setup services in UAE by ADL Business Solutions. Expert support for company formation, licensing, visas, and PRO services.',
  verification: {
    google: 'sKOgyWsAKMY3Fd_rE7Ij7R3MF1ACVdVqGaY7czz2wf8',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Tag Manager Script - CORRECT WAY */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P3LX6LBK');
          `}
        </Script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8E5N4PMC1Q"></script>
<script>
 {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-8E5N4PMC1Q');`}
</script>
      </head>

      <body className="font-sans">
        {/* ✅ Google Tag Manager NoScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P3LX6LBK"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}
        <BackToTopButton />
      </body>
    </html>
  )
}
