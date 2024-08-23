import { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
const About = () => {
  const [steps] = useState([
    {
      id: 1,
      name: "Step 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam mollitia cupiditate earum eveniet, cum sed quae magnam nesciunt quibusdam incidunt obcaecati odit maiores impedit velit totam aspernatur atque. Ad, aliquam!",
    },
    {
      id: 2,
      name: "Step 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam mollitia cupiditate earum eveniet, cum sed quae magnam nesciunt quibusdam incidunt obcaecati odit maiores impedit velit totam aspernatur atque. Ad, aliquam!",
    },
    {
      id: 3,
      name: "Step 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam mollitia cupiditate earum eveniet, cum sed quae magnam nesciunt quibusdam incidunt obcaecati odit maiores impedit velit totam aspernatur atque. Ad, aliquam!",
    },
  ]);

  return (
    <div>
      <Navbar page="about" />
      <div className="py-26 bg-gradient-to-r from-[rgb(185,185,120)] to-white rounded-2xl px-8 mt-5">
  
      <div
        className="lg:mb-0 flex "
        style={{ height: "100vh", textAlign: "center" }}>
        <img src="/mc.svg" alt="" className="w-1/3" />
        <section>
          <div className="container mx-auto bg-white max-w-7xl sm:p-6 lg:p-8">
            <p className="my-5 text-xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              What is Mastercard {"<Code for Change>"} ?
            </p>
            <div className="w-full">
              <ul className="space-y-6">
                {steps.map((step) => {
                  return (
                    <li key={step.id} className="flex -mx-4">
                      <div className="px-4">
                        <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                          {step.id}
                        </span>
                      </div>
                      <div className="px-4">
                        <h3 className="my-4 text-xl font-semibold">
                          {step.name}
                        </h3>
                        <p className="leading-loose text-gray-500">
                          {step.desc}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      </div>
     
    </div>
    <Footer />
    </div>
   
    
  );
};

export default About;
