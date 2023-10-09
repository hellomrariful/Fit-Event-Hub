import { Link } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { id, name, image, price, description } = service || "";
  return (
    <div className="mb-8">
      <Link to={`/service/${id}`}>
        <div className="bg-white shadow-md dark:bg-gray-800 lg:h-full my-6">
          <img
            className="object-cover w-full md:h-96 lg:h-3/5"
            src={image}
            alt=""
          />
          <div className="px-7 py-4 -mb-12">
            <div>
              <div className="flex justify-between text-[27px] font-bold ">
                <h1 className="">{name}</h1>
                <h1 className="flex items-center text-[#524FF5]">
                  <span>
                    <FaDollarSign></FaDollarSign>
                  </span>
                  <span>{price}</span>
                </h1>
              </div>
              <div className="mt-3 text-[16px] text-[#6A6A6A]">
                <div className="lg:-mb-10 xl:-mb-20">
                  {description.length > 130 ? (
                  <p>
                    {description.slice(0, 130)}
                    <Link className="text-[#524FF5] text-[16px]" to={`/service/${id}`}>... Read More</Link>
                  </p>
                ) : (
                  <p>{description}</p>
                )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
