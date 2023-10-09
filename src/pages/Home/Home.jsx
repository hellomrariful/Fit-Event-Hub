import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import ServiceCard from "./ServiceCard";
import Trainer1 from "../../assets/T-01.png";
import Trainer2 from "../../assets/T-02.png";
import Trainer3 from "../../assets/T-03.png";
import { FaInstagram, FaFacebook, FaTwitter, FaStar } from "react-icons/fa";
import Faq from "./Faq";

const Home = () => {
  const services = useLoaderData();
  console.log(services);

  const faqItems = [
    {
      question: "What is Material Tailwind?",
      answer: "Material Tailwind is a...",
    },
    {
      question: "How to use Material Tailwind?",
      answer: "To use Material Tailwind...",
    },
    {
      question: "What can I do with Material Tailwind?",
      answer: "With Material Tailwind, you can...",
    },
  ];

  return (
    <div>
      <Header></Header>

      <div className="mt-20">
        <p className="text-center text-[#524FF5] text-2xl font-semibold  uppercase tracking-[8px] mb-1">
          OUR FITNESS TRAINING
        </p>
        <h1 className="text-center text-5xl font-bold mb-16">Ongoing Events</h1>
        <div className="grid lg:grid-cols-2 lg:space-x-4 ">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </div>
      </div>

      <div>
        <p className="text-center text-[#524FF5] text-2xl font-semibold uppercase tracking-[8px] mb-1 mt-20">
          We Trained You to Gain
        </p>
        <h1 className="text-center text-5xl font-bold mb-16">Our Trainers</h1>

       <div>
       <div className="grid md:grid-cols-3 space-x-4 ">
          <div className="bg-[#1B2129]">
            <div className="bg-[#D3D3D3] -mt-3">
              <img className=" mx-auto" src={Trainer2} alt="profile-picture" />
            </div>

            <div className="p-6 text-white">
              <div className="flex justify-between items-center">
              <h4 className="mb-2 text-2xl font-semibold">Steve Smith</h4>
              <span className="flex items-center text-xl  text-[#FFA722]"> 
             
              <FaStar></FaStar>
              <span className="text-white">/5</span>
              </span>
              </div>
              <p className="border-[#49505A] border"></p>
              <p className="mt-4 mb-1 text-xl font-semibold">
                Specializations :
              </p>
              <p className=" text-xl font-normal text-[#858585]">
                Crosscut Export, Nutrition & Rehab
              </p>
              <div className="flex justify-center text-xl gap-4 mt-4">
                <FaInstagram></FaInstagram>
                <FaFacebook></FaFacebook>
                <FaTwitter></FaTwitter>
              </div>
            </div>
          </div>

          <div className="bg-[#1B2129]">
            <div className="bg-[#D3D3D3]">
              <img className="mx-auto" src={Trainer1} alt="profile-picture" />
            </div>

            <div className="p-6 text-white">
            <div className="flex justify-between items-center">
              <h4 className="mb-2 text-2xl font-semibold">Steve Smith</h4>
              <span className="flex items-center text-xl  text-[#FFA722]"> 
             
              <FaStar></FaStar>
              <span className="text-white">/5</span>
              </span>
              </div>
              <p className="border-[#49505A] border"></p>
              <p className="mt-4 mb-1 text-xl font-semibold">
                Specializations :
              </p>
              <p className=" text-xl font-normal text-[#858585]">
                Crosscut Export, Nutrition & Rehab
              </p>
              <div className="flex justify-center text-xl gap-4 mt-4">
                <FaInstagram></FaInstagram>
                <FaFacebook></FaFacebook>
                <FaTwitter></FaTwitter>
              </div>
            </div>
          </div>
          <div className="bg-[#1B2129]">
            <div className=" bg-[#D3D3D3]">
              <img className="mx-auto" src={Trainer3} alt="profile-picture" />
            </div>

            <div className="p-6 text-white">
            <div className="flex justify-between items-center">
              <h4 className="mb-2 text-2xl font-semibold">Steve Smith</h4>
              <span className="flex items-center text-xl  text-[#FFA722]"> 
             
              <FaStar></FaStar>
              <span className="text-white">/5</span>
              </span>
              </div>
              <p className="border-[#49505A] border"></p>
              <p className="mt-4 mb-1 text-xl font-semibold">
                Specializations :
              </p>
              <p className=" text-xl font-normal text-[#858585]">
                Crosscut Export, Nutrition & Rehab
              </p>
              <div className="flex justify-center text-xl gap-4 mt-4">
                <FaInstagram></FaInstagram>
                <FaFacebook></FaFacebook>
                <FaTwitter></FaTwitter>
              </div>
            </div>
          </div>
        </div>
       </div>

      </div>

      <div>
      <p className="text-center text-[#524FF5] text-2xl font-semibold uppercase tracking-[8px] mb-1 mt-20">
      Frequently Asked Questions
        </p>
        <h1 className="text-center text-[#2C323A] text-5xl font-bold mb-16">Have Question?</h1>

        <div className="text-2xl">
        <Faq faqItems={faqItems} />
        </div>
      </div>
    </div>
  );
};

export default Home;
