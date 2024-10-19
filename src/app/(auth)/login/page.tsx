import { ChevronLeft, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { buttonVariants } from '~/components/ui/button';
import { UserAuthForm } from '~/features/user-auth-form';
import { cn } from '~/lib/utils';

export const metadata: Metadata = {
	title: 'Login',
	description: 'Login to your account',
};

function LoginPage() {
	return (
		<div className='container mx-auto flex h-screen w-screen flex-col items-center justify-center'>
			<Link href='/' className={cn(buttonVariants({ variant: 'ghost' }), 'absolute top-4 left-4 md:top-8 md:left-8')}>
				<ChevronLeft className='mr-2 h-4 w-4' />
				Back
			</Link>
			<div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
				<div className='flex flex-col space-y-2 text-center'>
					<Sparkles className='mx-auto h-6 w-6 text-primary' />
					<h1 className='font-semibold text-2xl tracking-tight'>Welcome back</h1>
					<p className='text-muted-foreground text-sm'>Enter your email to sign in to your account</p>
				</div>
				<UserAuthForm />
				<p className='px-8 text-center text-muted-foreground text-sm'>
					<Link href='/register' className='underline underline-offset-4 hover:text-brand'>
						Don&apos;t have an account? Sign Up
					</Link>
				</p>
			</div>
		</div>
	);
}

export default LoginPage;
