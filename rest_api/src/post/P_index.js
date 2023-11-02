import { Route,Routes,Link } from "react-router-dom";
import P_home from "./p_home";
import P_user from "./P_user";
function Post(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<P_home/>}/>
                <Route path="/posts/:id" element={<P_user/>}/>
            </Routes>
        </div>
    )
}
export default Post;