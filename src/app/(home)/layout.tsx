import { Footer } from '~/components/footer';
import { Header } from '~/components/header';

interface Props {
	children: React.ReactNode;
}

function AuthLayout(props: Props) {
	return (
		<div className='min-h-screen'>
			<Header />
			{props.children}
			<Footer />
		</div>
	);
}

export default AuthLayout;
