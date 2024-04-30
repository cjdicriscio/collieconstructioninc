import Kimber from "../images/kimber.jpg"

function About() {
  return (
    <div class="mx-auto text-black bg-white">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5 text-lg">
            <div className="border-t-4 md:col-span-6"></div>
            <h1 className="border-l-8 border-amber-900 p-4 m-12 text-xl md:col-span-6 flex items-center">
                Collie has been proudly serving people since 1993. It's what we do. <br></br> 
                Hundreds of jobs. Hundreds of satisfied customers. Decades of experience.
            </h1>
            <p className="m-20 md:col-span-6 flex items-center justify-center">
                Collie is a small general contractor based in Phoenixville Pennsylvania. If the name doesn't give it away, we love Collies.
                We do major home additions, renovations, new construction,
                historic renovations, and preservation. We do free
                estimates for anyone's fresh building ideas.
                We are an active National Association of the Remodeling Industry (NARI) member.  We also work with you to make sure that you are getting the best price for the best work.
                Our company will tell you when something is priced too high and share realistic expecations throughout the process.
            </p>
            <div className="m-10 grid grid-cols-1 md:col-span-2 ">
                <img src={Kimber} alt="Kimber" className="border-8 border-amber-900 "/>
                <figcaption className="flex items-center justify-center">
                    Kimber (Age 3 in People Years)
                </figcaption>
            </div>
            
            <p className="m-20 md:col-span-4 flex items-center justify-center">
                Architects recommend us for our competence in turning their blueprints into complete projects. Many of the people we work with
                come back to us for getting additional projects done. Customers report that our work pays more attention to detail and the
                customer's requests than other companies they have worked with. They also share that the personal assistance and non-construction
                related help is above-and-beyond. We ensure that any existing landscape, interior, and
                exterior are in an even better condition than when we started. This is the result of always being available for hearing what
                each person wants and needs to make their home or office feel just right. <br></br> <br></br>
                
                Because of our size, we are quick to get work done 
                through our reliable network of subcontractors. Large companies are unable to compete with us because of their 
                large overhead. The hardworking people we know are as equally valuable to us as they will be to you.
                Having an expert in each field will produce the highest grade of professionalism for each entity in your home.
                It also helps that we love what we do. We enjoy our work so much that it rarely feels like a job. 
            </p>
            <p className="m-20 md:col-span-6 flex items-center justify-center">
                We are getting new jobs as fast as we complete them but we'd love to work with you if you have concepts for an addition,
                renovation, reconstruction, or even a completely new building!
            </p>
            <div className="m-20 md:col-span-6"></div>
        </div>
    </div>
  );
}

export default About;