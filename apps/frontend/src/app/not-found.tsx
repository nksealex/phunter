'use client';

import { ArrowRight, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button, buttonVariants } from '~/components/ui/button';

export default function NotFoundPage() {
	const [isFloating, setIsFloating] = useState(false);

	useEffect(() => {
		const floatInterval = setInterval(() => {
			setIsFloating(prev => !prev);
		}, 1500);

		return () => clearInterval(floatInterval);
	}, []);

	return (
		<div className='flex min-h-screen flex-col items-center justify-center p-4'>
			<div className='w-full max-w-2xl space-y-8'>
				<div className='space-y-4 text-center'>
					<h1 className='font-extrabold text-9xl tracking-tighter'>
						4<span className={`inline-block transition-transform duration-500 ${isFloating ? '-translate-y-2 transform' : ''}`}>0</span>4
					</h1>
					<p className='font-heading text-4xl'>Oops! Page Not Found</p>
					<p className='text-lg'>The page you're looking for has gone hunting for the next big thing.</p>
				</div>

				<div className='space-y-4 rounded-lg p-6 shadow-xl'>
					<div className='flex items-center space-x-2 text-yellow-600'>
						<Lightbulb className='h-6 w-6' />
						<span className='font-semibold'>Have an idea?</span>
					</div>
					<p>Submit your product and get it featured on our homepage.</p>
					<Button className='w-full'>
						Submit Your Product
						<ArrowRight className='ml-2 h-4 w-4' />
					</Button>
				</div>

				<div className='text-center'>
					<Link href='/' className={buttonVariants({ variant: 'link', className: 'text-yellow-600' })}>
						← Back to Homepage
					</Link>
				</div>
			</div>
		</div>
	);
}
