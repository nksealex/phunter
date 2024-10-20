import { Sparkles } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '~/components/ui/button';
import { UserAuthForm } from '~/features/user-auth-form';
import { cn } from '~/lib/utils';

export const metadata = {
	title: 'Create an account',
	description: 'Create an account to get started.',
};

function RegisterPage() {
	return (
		<div className='container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0'>
			<Link href='/login' className={cn(buttonVariants({ variant: 'ghost' }), 'absolute top-4 right-4 md:top-8 md:right-8')}>
				Login
			</Link>
			<div className='hidden h-full bg-muted lg:block' />
			<div className='lg:p-8'>
				<div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
					<div className='flex flex-col space-y-2 text-center'>
						<Sparkles className='mx-auto h-6 w-6 text-primary' />
						<h1 className='font-semibold text-2xl tracking-tight'>Create an account</h1>
						<p className='text-muted-foreground text-sm'>Enter your email below to create your account</p>
					</div>
					<UserAuthForm />
					<p className='px-8 text-center text-muted-foreground text-sm'>
						By clicking continue, you agree to our{' '}
						<Link href='/terms' className='underline underline-offset-4 hover:text-brand'>
							Terms of Service
						</Link>{' '}
						and{' '}
						<Link href='/privacy' className='underline underline-offset-4 hover:text-brand'>
							Privacy Policy
						</Link>
						.
					</p>
				</div>
			</div>
		</div>
	);
}

export default RegisterPage;
