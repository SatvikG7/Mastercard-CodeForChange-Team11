import { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
const About = () => {
  const [steps] = useState([
    {
      id: 1,
      name: "Overview : ",
      desc: "Y4D Foundation is a youth led organization working on empowering the underprivileged section of our society. Y4D has a pan India presence through its wide network of Volunteer Chapters across the country. Y4D Foundation focused its interventions on issues concerning youth and children which brought about significant changes in their lives in terms of education, health, skill, career and sustainable livelihood. Y4D also works on Environment conservation, women empowerment, Food safety and security, . Being an organisation who cares for society, Y4D gets engaged in projects as the situation demands under natural or manmade disasters, like COVID-19 Pandemic, Flood, Drought Relief etc.",
    },
    {
      id: 2,
      name: "Vision : ",
      desc: "Y4D envisions fostering the development of a happy, healthy, and sustainable society in which every individual has an equal opportunity for growth and a life of dignity.",
    },
    {
      id: 3,
      name: "Values : ",
      desc: <p> - Transparency: Y4D ensures complete transparency in all our efforts and workings with Internal as well as external stakeholders of organisation. <br/> - Respect: Y4D ensures respect towards each individual and their views and feelings inside out the organisation despite its cast, creed, gender or color.<br/>- Integrity: Y4D works with integrity and ensures the dignity of all those involved in our endeavors. To comply with all laws, rules and regulations bestowed upon as part of an organisation.<br/> - Empathy: To be empathetic to all those associated with Y4D and ensure a high sense of understanding of the feelings of all our stakeholders.<br/></p>
            
      
    },
    {
      id: 4,
      name: "Goals : ",
      desc: <p>- Empower Youth through encouragement, education and employment to build a strong and prosperous society. <br/> - Work on various aspects impacting children to build an empowered future generation.<br/>- Empowering Citizens to live with dignity and get equal rights for them in society.<br/> - Creating a healthy, sustainable and Safe environment for citizens to live. </p>
            
      
    }
  ]);

  return (
    <div>
      <Navbar page="about" />
      <div className=" overflow-scroll py-26 bg-gradient-to-r from-[orange] to-white rounded-2xl px-8 mt-5">
  
      <div
        className="lg:mb-0 flex  "
        style={{ height: "100vh", textAlign: "center" }}>
        <img  className="p-56 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRonUCZ03LZQEuck8az5QpF1H4AIPBpfmrmIQ&s" alt=""  />
        <section>
          {/* <div className="container mx-auto bg-white max-w-7xl sm:p-6 lg:p-8"> */}
            <p className=" my-5 text-xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl text-center">
              <h> Y4D Foundation </h>
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
          {/* </div> */}
        </section>
      </div>
     
    </div>
    <Footer />
    </div>
   
    
  );
};

export default About;
