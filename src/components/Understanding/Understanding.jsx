import { useState } from "react";
import { useDispatch } from "react-redux";

function Understanding() {

    const dispatch = useDispatch();
    const [understandingInput, setUnderstandingInput] = useState(0);

    const onAddUnderstanding = (evt) => {
        evt.preventDefault();

        dispatch({
            type: "ADD_UNDERSTANDING",
            payload: understandingInput
        });
    }

    return (
        <div>
            <h1>How well are you understanding the content?</h1>
            <form onSubmit={onAddUnderstanding}>
                <input
                    type="number"
                    onChange={evt => setUnderstandingInput(evt.target.value)}
                    value={understandingInput}
                />
                <button type="submit">NEXT</button>
            </form>
        </div>
    )
}

export default Understanding;