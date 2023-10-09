import { useContext } from "react";
import { AuthContext } from '../../Providers/AuthProvider';


const Profile = ({children}) => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <img src={user.photoURL} alt="" />
        </div>
    );
};

export default Profile;