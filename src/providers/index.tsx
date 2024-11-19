'use client';
import { FC, ReactNode, useRef } from 'react';
import { Toaster } from 'react-hot-toast';

import { getQueryClient } from '@/utils';
import { NextUIProvider } from '@nextui-org/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { makeStore, AppStore } from '../lib/store'
import { Provider } from 'react-redux';
interface IProvider {
	children: ReactNode;
}

export const Providers: FC<IProvider> = ({ children }) => {
	// const locale = useLocale();
	 const locale = 'ru'
	const queryClient = getQueryClient();
	const storeRef = useRef<AppStore>()
	if (!storeRef.current) {
	  // Create the store instance the first time this renders
	  storeRef.current = makeStore()
	}
	return (
			<QueryClientProvider client={queryClient}>
				<Provider store={storeRef.current}>
					<NextUIProvider locale={locale} className="relative">
						{children}
						<Toaster position="top-center" />
						{process.env.NODE_ENV === 'development' && (
							<ReactQueryDevtools
								buttonPosition="bottom-left"
								initialIsOpen={false}
							/>
						)}
					</NextUIProvider>
				</Provider>
			</QueryClientProvider>
	);
};