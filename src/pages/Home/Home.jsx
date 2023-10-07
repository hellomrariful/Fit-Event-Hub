import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import ServiceCard from "./ServiceCard";
import Trainer1 from "../../assets/T-01.png";
import Trainer2 from "../../assets/T-02.png";
import Trainer3 from "../../assets/T-03.png";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import Faq from "./Faq";

const Home = () => {
  const services = useLoaderData();
  console.log(services);

  const faqItems = [
    {
      question: "What is Material Tailwind?",
      answer:
        "Material Tailwind is a...",
    },
    {
      question: "How to use Material Tailwind?",
      answer:
        "To use Material Tailwind...",
    },
    {
      question: "What can I do with Material Tailwind?",
      answer:
        "With Material Tailwind, you can...",
    },
  ];

  return (
    <div>
      <Header></Header>

      <div>
        <h1 className=" text-center mt-20 mb-10 text-4xl font-bold">
          Our Services
        </h1>
        <div className="grid lg:grid-cols-2 gap-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </div>
      </div>

      <div>
        <h1 className=" text-center mt-20 mb-10 text-4xl font-bold">
          Our Trainer
        </h1>
        <div>
          <div className="bg-[#fcfcfc]">
            <div className=" bg-slate-500">
              <img className=" mx-auto" src={Trainer1} alt="profile-picture" />
            </div>
            <div className="p-6 text-center">
              <h4 className="mb-2   text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Steve Smith
              </h4>
              <p className=" border"></p>
              <p>Specializations :</p>
              <p>Crosscut Export, Nutrition & Rehab</p>
              <div className="flex justify-center ">
                <FaInstagram></FaInstagram>
                <FaFacebook></FaFacebook>
                <FaTwitter></FaTwitter>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-center mt-20 mb-10 text-4xl font-bold">
          Frequently Asked Questions
        </h1>
        <Faq faqItems={faqItems} />
      </div>
    </div>
  );
};

export default Home;