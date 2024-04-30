import Collie from "../images/collie.PNG";

function Footer() {
    return (
      <div className="bg-white text-black flex justify-between items-center h-20">
        <h1 className='font-sans text-md text-amber-800 font-bold m-4 hidden md:block'>
          566 Bridge Street, Phoenixville, PA 19460 <br/> 610 935 7111
        </h1>
        <img src={Collie} alt='Collie' className='md:h-full hidden md:block h-auto flex justify-end'/>
      </div>
    );
}

export default Footer;