import { Link } from "react-router-dom";
import logo from "../../../assets/logo.webp";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-white">
      <div className="md:mt-20 mt-10">
        <footer className="bg-[#1B2129]">
          <div className="container py-10 mx-auto">
            <div className="flex flex-col items-center text-center">
              <Link className="flex items-center">
                <img src={logo} className="h-12 mr-3" alt="" />
                <span className="text-3xl font-bold">
                  Fitness Hub
                </span>
              </Link>

              <div className="flex flex-wrap justify-center mt-6 ">
                <a
                  href="#"
                  className="mx-4 text-[#858585] transition-colors duration-300 hover:text-[#524FF5]"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="mx-4 text-[#858585] transition-colors duration-300 hover:text-[#524FF5]"
                >
                  About
                </a>
                <a
                  href="#"
                  className="mx-4 text-[#858585] transition-colors duration-300 hover:text-[#524FF5]"
                >
                  Terms & Condition
                </a>
                <a
                  href="#"
                  className="mx-4 text-[#858585] transition-colors duration-300 hover:text-[#524FF5]"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            <div className="px-6 -mb-2">
              <hr className="border-[#49505A] my-8" />

              <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                <p className=" text-[#858585] dark:text-gray-300">
                  © Fitness Hub 2023. All Rights Reserved.
                </p>

                <div className="flex  -mx-2 md:mt-0 mt-3">
                  <a
                    href="https://github.com/hellomrariful"
                    className="mx-2 text-xl transition-colors duration-300 dark:text-gray-300 hover:text-[#524FF5] dark:hover:text-blue-400"
                    aria-label="GitHub"
                  >
                    <FaGithub></FaGithub>
                  </a>
                  <a
                    href="https://www.facebook.com/hellomrariful.id"
                    className="mx-2 text-xl transition-colors duration-300 dark:text-gray-300 hover:text-[#524FF5] dark:hover:text-blue-400"
                    aria-label="GitHub"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hellomrariful/"
                    className="mx-2 text-xl transition-colors duration-300 dark:text-gray-300 hover:text-[#524FF5] dark:hover:text-blue-400"
                    aria-label="Linkedin"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
