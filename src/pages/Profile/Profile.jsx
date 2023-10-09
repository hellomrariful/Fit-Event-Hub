import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Profile = ({ children }) => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handelSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      // Handle any potential errors during sign out
      console.error("Error signing out:", error);
    }
  };
  return (
    <div className=" lg:px-56 md:px-20 mx-auto">
      <div className="bg-[#F7FAFC] rounded-3xl drop-shadow-2xl mt-28 pt-3">
        <h1 className=" text-center text-2xl font-semibold  pt-5">
          My Profile
        </h1>
        <div className="grid grid-cols-3">
          <div className=" col-span-1">
            <img
              className=" h-28 w-28 rounded-full ml-5 md:ml-14 "
              src={user.photoURL}
              alt=""
            />
          </div>
          <div className=" mt-10 col-span-2 ml-7 mb-20">
            <h1>Full Name: {user.displayName}</h1>
            <p>Email: {user.email}</p>
          </div>
        </div>
      </div>
      <button
        onClick={handelSignOut}
        className=" bg-red-500 py-4 rounded relative -mt-20 w-full text-white text-xl  drop-shadow-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
