import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "../home-screen/tuits-stats";


const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };

    return(
        <div>
            <div>
                <li className="list-group-item d-flex flex-row justify-content-between">

                    <img className="wd-tuit-list-item-img float-left mt-0" src={tuit.avatar}/>
                    <div className="wd-tuit-list-item-text text-wrap">
                        <span>
                            <div className="fw-bold d-inline">{tuit.handle} </div>
                            <div className="text-muted d-inline"><b>@{tuit.postedBy.username}</b></div>
                            <i onClick={() => deleteTuit(tuit)} className="fas fa-trash float-end"></i>
                        </span> <br />
                        {tuit.tuit} <br />
                        {tuit.attachments ?
                            (tuit.attachments.video ?
                                <div>
                                    <iframe width="540" height="300" src={"https://www.youtube.com/embed/" + tuit.attachments.video}
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            className="wd-tuit-list-item-attachment-video"
                                            allowFullScreen>

                                    </iframe>
                                </div>
                                : <div className="wd-tuit-list-item-attachment-img"><img className="w-100" src={tuit.attachments.image}/></div>)
                            : <div></div>}
                        <TuitStats tuit={tuit}/>
                    </div>
                </li>
            </div>
        </div>
    );
};

export default TuitListItem;