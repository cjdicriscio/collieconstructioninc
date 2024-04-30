import Link from './Link';
import Collie from "../images/collie.PNG";

function Navbar() {
  const links = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Contact Us', path: '/contact'}
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="ml-3 mr-3"
        activeClassName="font-bold border-b-4 border-amber-800 font-sans"
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="bg-white text-black flex items-center justify-between whitespace-nowrap h-20">
      <h1 className='font-sans text-xl text-amber-800 font-bold m-4 hidden md:block'>
        Collie Construction Inc.
      </h1>
      <img src={Collie} alt='Collie' className='md:h-full hidden md:block h-auto '/>
      <div className="flex-grow flex justify-end">
        {renderedLinks}
      </div>
    </div>
  );
}

export default Navbar;
