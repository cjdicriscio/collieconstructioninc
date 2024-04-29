import Link from './Link';

function Navbar() {
  const links = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/accordion' },
    { label: 'About', path: '/about' },
    { label: 'Contact Us', path: '/contact'}
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="ml-3 mr-3"
        activeClassName="font-bold border-b-4 border-amber-800"
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="bg-white text-black flex justify-between whitespace-nowrap">
      <h1 className='font-sans text-xl text-amber-800 font-bold m-4'>
        Collie Construction Inc.
      </h1>
      <div className="flex-grow flex justify-end">
        {renderedLinks}
      </div>
    </div>
  );
}

export default Navbar;
