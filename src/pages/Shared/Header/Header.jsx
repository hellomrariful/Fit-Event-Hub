import { Link } from 'react-router-dom';
import banner from '../../../assets/banner.jpeg';

const Header = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div>
      <div className="w-full bg-center bg-cover h-[38rem]" style={backgroundImageStyle}>
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center">
            <h1 className="mb-6 text-3xl font-semibold text-white lg:text-7xl md:text-5xl lg:px-32 px-8">
            Keep Your Body Fit & Strong With Us
            </h1>
            <div className='space-x-4'>
            <span>
            <Link to='register'>
            <button className="md:px-8 px-4 py-[18px] text-xl font-medium text-black capitalize transition-colors duration-300 transform bg-[#A1F65E] lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            Join Now
            </button>
            </Link>
            </span>
            <span>
            <button className="md:px-8 px-4 py-4 mt-4 text-xl font-medium text-white capitalize transition-colors duration-300 transform outline lg:w-auto hover:bg-[#F0F0F0] focus:outline-none focus:bg-blue-500 ">
            About Us
            </button>
            </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
