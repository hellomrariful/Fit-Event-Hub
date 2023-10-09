import { useLoaderData, useParams } from "react-router-dom";
import moment from "moment";

const ServiceDetails = () => {
  const services = useLoaderData();

  const { id } = useParams();

  console.log(typeof id);

  const service = services.find((service) => service.id === id);
  console.log(service);

  return (
    <div>
      <div className="md:grid grid-cols-3 mt-16 gap-8">
        <div className="bg-white col-span-2">
          <img
            className="object-cover"
            src={service.image}
            alt=""
          />
          <div className="">
            <div className="mt-3">
              <div className="flex items-center gap-4 mb-8">
                <p className=" text-[#524FF5]">{moment().format("ll")}</p>
                <button className="py-1 px-2 bg-[#A1F65E]">
                  {service.category}
                </button>
              </div>
              <h1 className="md:text-4xl text-3xl text-[#1B2129] font-bold">
                {service.title}
              </h1>
              <p className="mt-4  text-[#6A6A6A] text-[18px]  font-medium">
                {service.description}
              </p>
              <h3 className="mt-10 text-[#1B2129] font-bold text-[27px] ">
                Key Reasons Why You Should Be a Part
              </h3>
              <ul className="list-disc ml-8">
                <li className="mt-2">
                  Massive Growth Opportunities in Few Time
                </li>
                <li>Professional Guidance by our Professional Trainer</li>
                <li>Healthier Lifestyle Inspiration & Relax Mind</li>
                <li>Exclusive Strategy & Industry Trends Update</li>
              </ul>

              <h3 className="mt-10 text-[#1B2129] font-bold text-[27px] ">
                Event Offerings and Advantages
              </h3>
              <ul className="ml-6">
                <li className="mt-2">1. An Officially Certificate.</li>
                <li>2. Access to Our Online Fitness Communities.</li>
                <li>3. Lifetime Access to Event Resources and Recordings.</li>
                <li>4. Health Screenings and Check-ups.</li>
                <li>5. Exclusive Fitness Workshops and Classes.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-span-1 mt-10 md:mt-0">
          <div className="bg-[#F9F9F9] p-7 relative">
            <h1 className="text-center text-2xl font-bold mb-1 text-[#1D2229]">
              Event Details
            </h1>
            <p className="mb-4 text-center text-[#6A6A6A] text-[17px]">
              {service.name}
            </p>

            <p className="text-[17px] text-[#6A6A6A] mt-8">
              Schedule :{" "}
              <span className="font-medium text-[#1D2229] text-[17px]">
                {service.schedule}
              </span>
            </p>

            <p className="text-[17px] text-[#6A6A6A] mt-8">
              Duration :{" "}
              <span className="font-medium text-[#1D2229] text-[17px]">
                {service.duration}
              </span>
            </p>

            <p className="text-[17px] text-[#6A6A6A] my-8">
              Level :{" "}
              <span className="font-medium text-[#1D2229] text-[17px]">
                {service.level}
              </span>
            </p>

            <p className="text-[17px] text-[#6A6A6A]">
              Ages :{" "}
              <span className="font-medium text-[#1D2229] text-[17px]">
                {service.age}
              </span>
            </p>

            <p className="text-[17px] text-[#6A6A6A] my-8 mb-16">
              Fee :{" "}
              <span className="font-medium text-[#1D2229] text-[17px]">
                ${service.price}
              </span>
            </p>
            <button className="w-full py-4 absolute -mt-8 -mx-7 rounded bg-[#A1F65E] text-xl drop-shadow">
              Book a Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
