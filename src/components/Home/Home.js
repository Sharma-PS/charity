import { Link } from "react-router-dom";
import { Navbar } from "reactstrap";

function Home(props) {
    return(
        <div>
            <Navbar/>
            <h1 style={{color:"white"}}>This is sample home page</h1>
            <h2><Link to="/volunteerProfile/5">To go to particular voluteer ID Eg: go to voluterr id 5</Link></h2>
        </div>
    );  
}

export default Home;
