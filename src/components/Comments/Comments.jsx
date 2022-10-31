import { useState } from "react";
import { useDispatch } from "react-redux";

function Support() {

    const dispatch = useDispatch();
    const [supportInput, setSupportInput] = useState(0);

    const onAddSupport = (evt) => {
        evt.preventDefault();

        dispatch({
            type: "ADD_SUPPORT",
            payload: supportInput
        });
    }

    return (
        <div>
            <h1>How well are you being supported?</h1>
            <form onSubmit={onAddSupport}>
                <input
                    type="number"
                    onChange={evt => setSupportInput(evt.target.value)}
                    value={supportInput}
                />
                <button type="submit">NEXT</button>
            </form>
        </div>
    )
}

export default Support;