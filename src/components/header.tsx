import { Sparkles } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from './ui/button';

export function Header() {
	return (
		<header className='container flex h-14 h-20 items-center py-6 md:mx-auto'>
			<Link className='flex items-center justify-center' href='/'>
				<Sparkles className='h-5 w-5 text-primary' />
				<span className='ml-2 font-semibold text-base'>Phunter</span>
			</Link>
			<nav className='ml-auto flex gap-4 sm:gap-6'>
				<Link className={buttonVariants({ variant: 'secondary' })} href='/login'>
					Login
				</Link>
			</nav>
		</header>
	);
}
