import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const AddToy = () => {
    const {user}=useContext(AuthContext)
    console.log(user);
    return (
        <div>
            
        </div>
    );
};

export default AddToy;