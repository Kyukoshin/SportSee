import Sidebar from "../../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";

const Landing = () => {


    return (
        <div className="home">
            <Sidebar />
            <div className="wrap_landing">
                Choose a user profile :
                <div className="wrap_users">
                    <Link to="user/18">Cecilia</Link>
                    <Link to="user/12">Karl</Link>
                </div>
            </div>
        </div>
    );
}
export default Landing