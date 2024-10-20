interface Props {
	children: React.ReactNode;
}

function AuthLayout(props: Props) {
	return <div className='min-h-screen'>{props.children}</div>;
}

export default AuthLayout;
