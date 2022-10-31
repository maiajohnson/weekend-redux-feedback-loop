import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Review() {

    const history = useHistory();
    const dispatch = useDispatch();

    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);

    const review = {
        feeling: feeling,
        understanding: understanding,
        support: support,
        comments: comments,
    }

    const postReview = () => {
        axios({
            method: "POST",
            url: "/reviewdata",
            data: review,
        })
            .then(response => {
                dispatch({
                    type: "RESET",
                });

                history.push("/success");
            })
            .catch(err => {
                console.log('POST error', err);
            });
    };

    return (
        <>
            <section>
                <h2>Review Your Feedback</h2>
                <h3>Feeling: {feeling}</h3>
                <h3>Understanding: {understanding}</h3>
                <h3>Support: {support}</h3>
                <h3>Comments: {comments}</h3>
                <div>
                    <button className="reviewBtn" onClick={(evt) => postReview(evt)}>SUBMIT</button>
                </div>
            </section>
        </>
    )
}

export default Review;
