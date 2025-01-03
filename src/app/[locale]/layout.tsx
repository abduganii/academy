import { Inter } from "next/font/google";
import { getMessages, setRequestLocale} from "next-intl/server";
import { Providers } from "@/providers";
import NextTopLoader from 'nextjs-toploader';

import "@/styles/globals.scss";
import { notFound } from "next/navigation";
import {BaseLayout} from "@/layout/BaseLayout";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";

import {getQueryClient, queryFn} from "@/utils";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return routing.locales.map((locale:any) => ({locale}));
}

export default async function RootLayout({
  children,
  params: { locale },
}: any) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery<any>({
    queryKey: ['auth/me'],
    queryFn: (context:any) => queryFn<any>(context),
  });

  return (
    <html lang={locale}>
      <body className={inter.className}>
      <NextTopLoader
      color="#2299DD"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={true}
      easing="ease"
      speed={200}
      shadow="0 0 10px #2299DD,0 0 5px #2299DD"
      />
      <NextIntlClientProvider  messages={messages}>
          <Providers>
            <HydrationBoundary state={dehydrate(queryClient)}>
            <BaseLayout>{children}</BaseLayout>
          </HydrationBoundary>
          </Providers> 
      </NextIntlClientProvider>
      </body>
    </html>
  );
}
