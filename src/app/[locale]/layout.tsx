import { Inter } from "next/font/google";
import { NextIntlClientProvider, } from "next-intl";
import { Providers } from "@/providers";
import  BaseLayout  from "@/layout/BaseLayout";
import { IChildren, IParams } from "@/types";
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

import "@/styles/globals.scss";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

interface IRootLayout extends IChildren {
  params: IParams;
}

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<IRootLayout>) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <BaseLayout>
              {children}
            </BaseLayout>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
