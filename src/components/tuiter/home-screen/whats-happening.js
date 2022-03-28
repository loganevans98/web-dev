import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });
    }
    return (
        <div className="d-flex flex-row justify-content-around align-items-start pt-3 pb-4">
            <img className="wd-whats-happening-avatar" src={"../images/me.jpeg"}/>
            <div>
                 <textarea className="wd-whats-happening-text-area" placeholder={"What's happening?"} value={whatsHappening}
                           onChange={(event) =>
                               setWhatsHappening(event.target.value)}>
                </textarea>
                <hr></hr>
                <div className="d-flex flex-row justify-content-between">
                    <div>
                        <i className="fas fa-image pe-2" style={{color: "#2a9fd6"}}></i>
                        <i className="fas fa-chart-line pe-2" style={{color: "#2a9fd6"}}></i>
                        <i className="fas fa-smile pe-2" style={{color: "#2a9fd6"}}></i>
                        <i className="fas fa-calendar" style={{color: "#2a9fd6"}}></i>
                    </div>
                    <button className="btn btn-primary w-25" onClick={tuitClickHandler}>
                        Tuit
                    </button>
                </div>


            </div>
        </div>
    );
}
export default WhatsHappening;

