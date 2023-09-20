import {useParams} from "react-router-dom";

function MemberDetails() {

    const {memberId} = useParams()

    return (
        <>
            <h1>Welcome to Member Details page</h1>
            <h2>{memberId} </h2>
        </>
    );
}

export default MemberDetails ;
