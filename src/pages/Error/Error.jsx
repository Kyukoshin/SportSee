import Sidebar from "../../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";

const Error = () => {


    return (
        <div className="home">
            <Sidebar />
            <div className="wrap_landing">
                Error
                <div className="wrap_users">
                    <Link to="/">Back to landing page</Link>
                </div>
            </div>
        </div>
    );
}
export default Error