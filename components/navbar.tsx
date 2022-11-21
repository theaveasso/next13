import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className='w-full bg-red-100 h-[80px] flex justify-center items-center'>
			<ul className='flex space-x-8'>
				<Link href={'/'}>Home</Link>
				<Link href={'/about'}>About</Link>
				<Link href={'/server'}>Server</Link>
				<Link href={'/client'}>Client</Link>
				<Link href={'/staticProps'}>Static Props</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
