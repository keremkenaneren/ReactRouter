import {useNavigate} from "react-router-dom";

function Home() {

    const navigate = useNavigate()

    return (
        <div>
          <h1>Home</h1>
            <button onClick={()=> navigate("/mission")} >Go to Mission</button>
        </div>
    );
}

export default Home ;
