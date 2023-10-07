import banner from '../../../assets/banner.jpeg';

const Header = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${banner})`, // Use the imported banner image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div>
      <div className="w-full bg-center bg-cover h-[38rem]" style={backgroundImageStyle}>
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white lg:text-4xl">
            Keep Your Body <span className="text-blue-400">Fit</span> & Strong With Us
            </h1>
            <div>
            <span>
            <button className="w-full px-8 py-[17px] mt-4 text-xl font-medium text-black capitalize transition-colors duration-300 transform bg-[#A1F65E]  lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500 ">
            Start Today
            </button>
            </span>
            <span className='lg:ml-3'>
            <button className="w-full px-8 py-4 mt-4 text-xl font-medium text-white capitalize transition-colors duration-300 transform outline lg:w-auto hover:bg-[#F0F0F0] focus:outline-none focus:bg-blue-500 ">
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
