import {useSearchParams} from "react-router-dom";

function Members() {

    const [search, setSearch] = useSearchParams()
    const isActive = search.get("filter") === "active";

    return (
        <>
            <h1>Welcome to Members page</h1>
            <button onClick={()=>setSearch({filter:"active"})} >Show Active Members</button>
            <br/>
            <br/>
            <button onClick={()=>setSearch()} >All Members</button>
            {isActive ? <h1>Active Members</h1> : <h1>All Members</h1>}
        </>
    );
}

export default Members ;
