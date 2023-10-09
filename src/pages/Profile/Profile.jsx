import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Profile = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <p>Loading....</p>
    }
    return (
        <div>
            hello
            <p>{user.email}</p>
        </div>
    );
};

export default Profile;



