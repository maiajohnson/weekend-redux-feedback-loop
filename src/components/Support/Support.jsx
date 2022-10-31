import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Support() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [supportInput, setSupportInput] = useState(0);

    const onAddSupport = (evt) => {
        evt.preventDefault();

        dispatch({
            type: "ADD_SUPPORT",
            payload: supportInput
        });

        history.push('/comments');
    }

    return (
        <div>
            <h1>How well are you being supported?</h1>
            <form onSubmit={onAddSupport}>
                <div className="support-radio">
                    <input type="radio" name="support" id="1" onChange={() => setSupportInput('1')} required />
                    <label htmlFor="one"><b>1</b></label>
                </div>
                <div className="support-radio">
                    <input type="radio" name="support" id="2" onChange={() => setSupportInput('2')} required />
                    <label htmlFor="two"><b>2</b></label>
                </div>
                <div className="support-radio">
                    <input type="radio" name="support" id="3" onChange={() => setSupportInput('3')} required />
                    <label htmlFor="three"><b>3</b></label>
                </div>
                <div className="support-radio">
                    <input type="radio" name="support" id="4" onChange={() => setSupportInput('4')} required />
                    <label htmlFor="four"><b>4</b></label>
                </div>
                <div className="support-radio">
                    <input type="radio" name="support" id="5" onChange={() => setSupportInput('5')} required />
                    <label htmlFor="five"><b>5</b></label>
                </div>
                <button type="submit">NEXT</button>
            </form>
        </div>
    )
}

export default Support;