import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { cn } from '~/lib/utils';

const sans = Inter({ subsets: ['latin'], variable: '--font-sans' });
const heading = localFont({
	src: '../assets/fonts/CalSans-SemiBold.woff2',
	variable: '--font-heading',
});

export const metadata: Metadata = {
	title: 'Phunter',
	description: 'Phunter: Your Go-To for Product Discovery',
};

interface Props {
	children: React.ReactNode;
}

export default function RootLayout(props: Props) {
	return (
		<html lang='en'>
			<body className={cn(sans.variable, heading.variable, 'min-h-screen bg-background font-sans antialiased')}>{props.children}</body>
		</html>
	);
}
