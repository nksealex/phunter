import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

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
			<body className={inter.className}>{props.children}</body>
		</html>
	);
}
