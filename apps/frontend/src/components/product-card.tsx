import { MessageSquare, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import { cn } from '~/lib/utils';

interface Props {
	logo: string;
	name: string;
	description: string;
	comments: number;
	categories: string[];
	upvotes: number;
}

export function ProductCard(props: Props) {
	const { name, description, comments, categories, upvotes, logo } = props;

	return (
		<div className='flex items-center space-x-4 rounded-lg py-3'>
			<div className='h-[40px] w-[40px] shrink-0'>
				<Image src={logo} alt={`${name} logo`} width={40} height={40} className='rounded-md object-cover' />
			</div>

			<div className='min-w-0 flex-1'>
				<h3 className='truncate font-medium text-base'>{name}</h3>
				<p className='line-clamp-2 text-gray-500 text-xs'>{description}</p>
				<div className='mt-1 flex items-center space-x-2'>
					<div className='flex items-center text-xs'>
						<MessageSquare className='mr-1 h-3 w-3' />
						<span>{comments}</span>
					</div>
					{categories.map((category, index) => (
						<span key={category} className={cn('rounded-full bg-gray-100 px-1.5 py-0.5 text-xs', index !== 0 && 'hidden sm:block')}>
							{category}
						</span>
					))}
				</div>
			</div>
			<div className='flex items-center space-x-2'>
				<div className='group flex h-12 w-12 cursor-pointer flex-col items-center justify-center rounded-md bg-gray-100 text-gray-600'>
					<ThumbsUp className='h-4 w-4 group-hover:text-primary' />
					<span className='mt-1 font-medium text-xs'>{upvotes}</span>
				</div>
			</div>
		</div>
	);
}
