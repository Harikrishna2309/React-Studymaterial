import { Route,Routes,Link } from "react-router-dom";
import Home from "./Home";
import User from "./User";
function Webpages(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/User/:id" element={<User/>}/>
            </Routes>
        </div>
    )
}
export default Webpages;