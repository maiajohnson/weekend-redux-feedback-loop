import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Feeling() {

    const baseFeeling = useSelector(store => store.feeling);

    const dispatch = useDispatch();
    const history = useHistory();

    const [feelingInput, setFeelingInput] = useState('');

    const onAddFeeling = (evt) => {
        evt.preventDefault();

        dispatch({
            type: "ADD_FEELING",
            payload: feelingInput
        });

        history.push('/understanding');
    }

    return (
        <>
            <h1>How are you feeling today?</h1>
            <form onSubmit={onAddFeeling}>
               <div className="feeling-radio">
                <input type="radio" name="feel" id="1" onChange={() => setFeelingInput('1')} required />
                <label htmlFor="one"><b>1</b></label> 
               </div>
               <div className="feeling-radio">
                <input type="radio" name="feel" id="2" onChange={() => setFeelingInput('2')} required />
                <label htmlFor="two"><b>2</b></label> 
               </div>
               <div className="feeling-radio">
                <input type="radio" name="feel" id="3" onChange={() => setFeelingInput('3')} required />
                <label htmlFor="three"><b>3</b></label> 
               </div>
               <div className="feeling-radio">
                <input type="radio" name="feel" id="4" onChange={() => setFeelingInput('4')} required />
                <label htmlFor="four"><b>4</b></label> 
               </div>
               <div className="feeling-radio">
                <input type="radio" name="feel" id="5" onChange={() => setFeelingInput('5')} required />
                <label htmlFor="five"><b>5</b></label> 
               </div>
                <button type="submit">NEXT</button>
            </form>
        </>
    )
}

export default Feeling;