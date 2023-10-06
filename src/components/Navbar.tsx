import logo from '../assets/logo.png';
import logo_text from '../assets/logo_text.png';

export default function Navbar() {
    return (
        <nav className='flex flex-row justify-center align-middle w-full h-24 bg-neutral-900 p-2'>
            <img height={64} width={64} src={logo} alt="logo" />
            <img height={64} width={'full'} src={logo_text} alt="logo" />
        </nav>
    );
}