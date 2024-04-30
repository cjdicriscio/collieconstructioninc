import Brad from "../images/brad.JPG"
import Bart from "../images/bart.jpg"

function Contact() {
  return (
    <div className=" text-black bg-white">
        <div className="grid grid-cols-1 md:grid-cols-9 gap-5 text-lg">
          <div className="border-t-4 md:col-span-9"></div>
          <h1 className="mt-20 md:col-span-9 flex justify-center text-xxl">
            Contact Us
          </h1>
          <p className="mb-10 md:col-span-9 flex justify-center text-lg bg-gray-100">
            Office Phone: 610 935 7111 (Call) <br></br>
          </p>
          <div className="md:col-span-1"></div>
          <img src={Brad} alt="Brad" className="md:col-span-3 border-8 md:grid-cols-1 border-amber-900 h-full object-cover"/>
          <div className="md:col-span-1"></div>
          <img src={Bart} alt="Bart" className="md:col-span-3 border-8 md:grid-cols-1 border-amber-900 h-full object-cover"/>
          <div className="md:col-span-1"></div>
          <div className="md:col-span-1"></div>
          <div className="md:col-span-3 md:grid-cols-1 ">
            <p className="bg-gray-100">
            Brad DiCriscio (Owner)
            </p>
            <p >
            Phone: 610 496 5181 (Call or Text)
            </p>
            <p>
            Email: brad@collieconstructioninc.com
            </p>
          </div>
          <div className="md:col-span-1"></div>
          <div className="md:col-span-3 md:grid-cols-1">
            <p className="bg-gray-100">
            Bart Messina (General Manager)
            </p>
            <p>
            Phone: 610 496 5181 (Call or Text)
            </p>
            <p>
            Email: bart@collieconstructioninc.com
            </p>
          </div>
          <div className="p-20 border-b-4 md:col-span-9"></div>
        </div>
    </div>
  );
}

export default Contact;