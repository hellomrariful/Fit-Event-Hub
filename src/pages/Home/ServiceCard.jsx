import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const {id, name, image, price, description } = service;
    return (
      <div className="mb-8"> {/* Added lg:w-1/2 to make it half-width on lg screens */}
        <Link to={`/service/${id}`}>
        <div className="bg-white shadow-md dark:bg-gray-800">
          <img className="object-cover w-full md:h-96 lg:h-3/5" src={image} alt="" />
          <div className="p-6">
            <div>
              <a
                href="#"
                className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                role="link"
              >
                {name}
              </a>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {description}
              </p>
            </div>
          </div>
        </div>
        </Link>
      </div>
    );
  };
  
  export default ServiceCard;
  