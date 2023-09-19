import {useNavigate} from "react-router-dom";

function Mission() {

    const navigate = useNavigate()

    return (
        <>
            <h4>Welcome to Mission. </h4>
            <h1>404 Not Found Error</h1>
            <button onClick={()=>navigate("/")} >Back</button>
        </>
    );
}

export default Mission ;
