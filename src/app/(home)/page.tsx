import Link from 'next/link';
import { Button, buttonVariants } from '~/components/ui/button';
import { cn } from '~/lib/utils';

function Home() {
	return (
		<main className='flex flex-col items-center justify-center'>
			<section className='space-y-6 pt-6 pb-8 md:pt-10 md:pb-12 lg:py-32'>
				<div className='container flex max-w-[64rem] flex-col items-center gap-4 text-center'>
					<Link href='https://x.com/nksealex' className='rounded-2xl bg-muted px-4 py-1.5 font-medium text-sm' target='_blank'>
						Follow along on Twitter
					</Link>
					<h1 className='font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>Discover the Next Big Thing</h1>
					<p className='max-w-[42rem] text-muted-foreground leading-normal sm:text-xl sm:leading-8'>
						Your daily dose of innovative products, groundbreaking ideas, and creative solutions.
					</p>
					<div className='space-x-4'>
						<Link href='/login' className={cn(buttonVariants({ size: 'lg' }))}>
							Get Started
						</Link>
						<Link
							href='https://github.com/nksealex/phunter'
							target='_blank'
							rel='noreferrer'
							className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
						>
							GitHub
						</Link>
					</div>
				</div>
			</section>

			<section className='container w-full py-6'>
				<div>
					<h2 className='mb-4 font-semibold text-xl'>Featured Today</h2>
					<div className='space-y-4'>
						<p className='text-muted-foreground'>No products found</p>
					</div>
				</div>
			</section>

			<section className='w-full bg-gray-900 py-8 text-white md:py-12 lg:py-16'>
				<div className='container px-4 md:px-6'>
					<div className='flex flex-col items-center space-y-4 text-center'>
						<div className='space-y-2'>
							<h2 className='font-bold text-2xl tracking-tighter sm:text-3xl'>Ready to Launch?</h2>
							<p className='mx-auto max-w-[500px] text-gray-400 text-sm md:text-base'>Share your product with our community</p>
						</div>
						<Button>Submit Your Product</Button>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Home;
