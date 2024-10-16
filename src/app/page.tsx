function Home() {
	return (
		<div className='min-h-screen p-8 pb-20 sm:p-20'>
			<main className='flex flex-col gap-8 items-center'>
				<h1 className='text-4xl font-bold'>Phunter</h1>
				<p className='text-xl w-full max-w-[40rem]'>
					👋 Hey there! Welcome to Phunter. Think of us as the laid-back cousin of Product Hunt, but we’re doing it{' '}
					<a className='font-medium text-blue-600 dark:text-blue-500 hover:underline' href='https://x.com/buildinpublic'>
						Build in Public style
					</a>
				</p>
			</main>
		</div>
	);
}

export default Home;
