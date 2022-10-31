import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Understanding() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [understandingInput, setUnderstandingInput] = useState('');

    const onAddUnderstanding = (evt) => {
        evt.preventDefault();

        dispatch({
            type: "ADD_UNDERSTANDING",
            payload: understandingInput
        });

        history.push('/support')
    }

    return (
        <div>
            <h1>How well are you understanding the content?</h1>
            <form onSubmit={onAddUnderstanding}>
                <div className="understanding-radio">
                    <input type="radio" name="understand" id="1" onChange={() => setUnderstandingInput('1')} required />
                    <label htmlFor="one"><b>1</b></label> 
                </div>
                <div className="understanding-radio">
                    <input type="radio" name="understand" id="2" onChange={() => setUnderstandingInput('2')} required />
                    <label htmlFor="two"><b>2</b></label> 
                </div>
                <div className="understanding-radio">
                    <input type="radio" name="understand" id="3" onChange={() => setUnderstandingInput('3')} required />
                    <label htmlFor="three"><b>3</b></label> 
                </div>
                <div className="understanding-radio">
                    <input type="radio" name="understand" id="4" onChange={() => setUnderstandingInput('4')} required />
                    <label htmlFor="four"><b>4</b></label> 
                </div>
                <div className="understanding-radio">
                    <input type="radio" name="understand" id="5" onChange={() => setUnderstandingInput('5')} required />
                    <label htmlFor="five"><b>5</b></label> 
                </div>
                <button type="submit">NEXT</button>
            </form>
        </div>
    )
}

export default Understanding;