'use client';
import { FC, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

import { getQueryClient } from '@/utils';
import { NextUIProvider } from '@nextui-org/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface IProvider {
	children: ReactNode;
}

export const Providers: FC<IProvider> = ({ children }) => {
	// const locale = useLocale();
	 const locale = 'ru'
	const queryClient = getQueryClient();

	return (
			<QueryClientProvider client={queryClient}>
				{/* <Provider store={store}> */}
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
				{/* </Provider> */}
			</QueryClientProvider>
	);
};