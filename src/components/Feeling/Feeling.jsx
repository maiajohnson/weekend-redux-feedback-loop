import { useState } from "react";
import { useDispatch } from "react-redux";

function Feeling() {

    const dispatch = useDispatch();
    const [feelingInput, setFeelingInput] = useState(0);

    const onAddFeeling = (evt) => {
        evt.preventDefault();

        dispatch({
            type: "ADD_FEELING",
            payload: feelingInput
        });
    }

    return (
        <div>
            <h1>How are you feeling today?</h1>
            <form onSubmit={onAddFeeling}>
                <input
                    type="number"
                    onChange={evt => setFeelingInput(evt.target.value)}
                    value={feelingInput}
                />
                <button type="submit">NEXT</button>
            </form>
        </div>
    )
}

export default Feeling;