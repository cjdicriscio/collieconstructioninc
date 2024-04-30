import House1 from "../images/house1.jpg"
import House2 from "../images/house2.JPG"
import House3 from "../images/house3.JPG"

function Home() {
  return(
    <div className=" text-white">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 text-lg">
            <div className="md:col-span-3 w-full">
                <img src={House1} alt="House 1"/>
            </div>
            <div className="md:col-span-2 m-10 grid items-center">
                <p className="border-l-8 p-4 border-amber-400">
                    Leading the Pennsylvania building industry for over <b>25 years </b>
                </p>
                <p className="border-l-8 p-4 border-amber-600">Full service general contracting without the hassle and intrusion</p>
                <p className="border-l-8 p-4 border-amber-800">Saving customers <b>time</b> and <b>money</b></p>
                
            </div>

            <div className="md:col-span-3">
                <img src={House2} alt="House 2" />
            </div>
            <div className="md:col-span-2 m-10 grid items-center">
                <p className="border-l-8 p-4 border-amber-400">
                    Keeping your home <b>clean</b>, <b>safe</b>, and <b>comfortable</b>
                </p>
                <p className="border-l-8 p-4 border-amber-600">Bringing your ideas to life with close <b>communication</b> from start to finish</p>
                <p className="border-l-8 p-4 border-amber-800">Choosing only high quality materials and enduring craftmanship</p>
            </div>

            <div className="md:col-span-3">
                <img src={House3} alt="House 3" />
            </div>
            <div className="md:col-span-2 grid items-center m-10">
                <p className="border-l-8 p-4 border-amber-400">Advocating for you with check-ups after completion</p>
                <p className="border-l-8 p-4 border-amber-600">Caring for functionality and fine-tuned details</p>
                <p className="border-l-8 p-4 border-amber-800">Ready to start building and quick to make progress</p>
            </div>
        </div>
    </div>
  );
}

export default Home;
