import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const services = useLoaderData()

  const { id } = useParams();

  console.log(typeof(id));

  const service = services.find((service) => service.id === id)
  console.log(service);

  return <div>
    <div className="bg-white shadow-md dark:bg-gray-800">
          <img className="object-cover w-full md:h-96 lg:h-3/5" src={service.image} alt="" />
          <div className="p-6">
            <div>
              
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          </div>
        </div>
  </div>;
};

export default ServiceDetails;
