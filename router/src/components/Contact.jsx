import {Link, Outlet} from "react-router-dom";

function Contact() {

    return (
        <div>
            <h1>Contact</h1>
            <section>
                <Link to="email">E-mail</Link>
                <br/>
                <Link to="linkedln">Linkedln</Link>
                <br/>
                <Link to="github">Github</Link>
            </section>
            <Outlet/>
        </div>
    );
}

export default Contact ;
