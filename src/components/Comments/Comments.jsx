import { useState } from "react";
import { useDispatch } from "react-redux";

function Comments() {

    const dispatch = useDispatch();
    const [commentsInput, setCommentsInput] = useState('');

    const onAddComments = (evt) => {
        evt.preventDefault();

        dispatch({
            type: "ADD_COMMENTS",
            payload: commentsInput
        });
    }

    return (
        <div>
            <h1>Any comments you want to leave?</h1>
            <form onSubmit={onAddComments}>
                <input
                    type="text"
                    onChange={evt => setCommentsInput(evt.target.value)}
                    value={commentsInput}
                />
                <button type="submit">NEXT</button>
            </form>
        </div>
    )
}

export default Comments;