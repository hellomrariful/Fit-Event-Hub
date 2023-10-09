import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";


const Root = () => {
    return (
        <div className="font-inter">
            <div className="px-6 container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <div className="min-h-full space-y-56">
            <Footer></Footer>
            </div>
        </div>
        
    );
};

export default Root;


// import { Outlet } from "react-router-dom";
// import Navbar from "../pages/Shared/Navbar/Navbar";
// import Footer from "../pages/Shared/Footer/Footer";

// const Root = () => {
//   return (
//     <div className="font-inter min-h-screen flex flex-col">
//       <div className="px-6 container mx-auto flex-grow">
//         <Navbar />
//         <Outlet />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Root;
