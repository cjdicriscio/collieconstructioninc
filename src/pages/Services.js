import Kitchen1 from "../images/kitchen.jpg"
import Servicearea from "../images/map.png"
import Porch from "../images/porch.JPG"
import Room from "../images/room.JPG"
import House4 from "../images/house4.JPG"

function Services() {
  return (
    <div className="text-white">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 text-lg">
          <div className="md:col-span-3 border-t-4 border-black">
                <img src={Servicearea} alt="House 1"/>
          </div>
          <div className="md:col-span-2 m-10 grid items-center">
              <ul className="border-l-8 p-4 border-white">
                <p className="p-4 text-xxl">Serving...</p>
                <li className="p-4 text-xl">Chester</li>
                <li className="p-4 text-xl">Montgomery</li>
                <li className="p-4 text-xl">Berks</li>
              </ul>
              
          </div>
            
            

            
            <div className="md:col-span-2 m-10 grid items-center">
                <p className="border-l-8 p-4 border-amber-800 text-xxl">Home Renovations</p>
            </div>
            <div className="md:col-span-3">
                <img src={Kitchen1} alt="Kitchen" />
            </div>

            <div className="md:col-span-3">
                <img src={House4} alt="house 4" />
            </div>
            <div className="md:col-span-2 grid items-center m-10">
                <p className="border-l-8 p-4 border-amber-800 text-xxl">New Construction</p>
            </div>

            
            <div className="md:col-span-2 grid items-center m-10">
                <p className="border-l-8 p-4 border-amber-800 text-xxl">Reconstruction and Historic Preservation</p>
            </div>
            <div className="md:col-span-3">
                <img src={Room} alt="Reconstructed Room" />
            </div>

            <div className="md:col-span-3">
                <img src={Porch} alt="porch" />
            </div>
            <div className="md:col-span-2 grid items-center m-10">
                <p className="border-l-8 p-4 border-amber-800 text-xxl">Major Additions</p>
            </div>
        </div>
    </div>
  );
}

export default Services;
