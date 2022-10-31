import { Link } from "react-router-dom";

function Success() {
    return (
        <section id="successText">
            <h1>Thank You For Your Time!</h1>
            <Link to="/">
                <button id="successBtn">Leave New Feedback</button>
            </Link>
        </section>
    );
}

export default Success;