import Script from "next/script";
import { Inter } from "next/font/google";
import { getMessages, setRequestLocale} from "next-intl/server";
import { Providers } from "@/providers";
import { IChildren, IParams } from "@/types";

import "@/styles/globals.scss";
import { notFound } from "next/navigation";
import BaseLayout from "@/layout/BaseLayout";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

interface IRootLayout extends IChildren {
  params: IParams;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<IRootLayout>) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale}>
  
      <body className={inter.className}>
      <NextIntlClientProvider  messages={messages}>

            <Providers>
              <BaseLayout>{children}</BaseLayout>
            </Providers>
          
      </NextIntlClientProvider>
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
           !function(f,b,e,v,n,t,s)
           {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
           n.callMethod.apply(n,arguments):n.queue.push(arguments)};
           if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
           n.queue=[];t=b.createElement(e);t.async=!0;
           t.src=v;s=b.getElementsByTagName(e)[0];
           s.parentNode.insertBefore(t,s)}(window, document,'script',
           'https://connect.facebook.net/en_US/fbevents.js');
           fbq('init', '1204540360819113');
           fbq('track', 'PageView');
        `}
        </Script>
        {/* <noscript>
          <img
            height="1"
            width="1"
            alt="facebook-event"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1204540360819113&ev=PageView&noscript=1"
          />
        </noscript> */}
        <Script id="metrika-counter" strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
              ym(98457220, "init", {
                    defer: true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
              });`}
        </Script>
      </body>
    </html>
  );
}
