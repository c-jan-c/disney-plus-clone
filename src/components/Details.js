import React from "react";
import './Details.css'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { onSnapshot, doc} from "firebase/firestore";


function Details(){

    const {id} = useParams()
    const [detailData, setDetailData] = useState({});
    
    useEffect(() => {


        onSnapshot(doc(db, "movies", id), (doc) => {
            if(doc.data() !== undefined ) {
                setDetailData(doc.data());
            } else {
                console.log('no such document in firebase');
            }
        }); 

        // onSnapshot(collection(db, 'movies'),(snapShot) => {})
        /* collection(db, 'movies')
         .doc(id)
         .getId()
         .then((doc) =>{
            if(doc.exists) {
                setDetailData(doc.data());
            } else {
                console.log('no such document in firebase')
            }
        }).catch((err) => {
            console.log(err)
        }); */
    }, [id]);

    return(
        <div className="details details__backgroundImage">
            <div className="details__background">
                <img src={detailData.backgroundImg} alt={detailData.title} />
            </div>
            <div className="details__titleImage">
                <img src={detailData.titleImg} alt={detailData.title} />
            </div>
            <div className="details__contentMeta">
                <div className="details__contentMetaControls">
                    <button className="details__contentMetaControls__player">
                        <img src="/images/play-icon-black.png" alt=""/>
                        <span>Play</span>
                    </button>
                    <button className="details__contentMetaControls__trailer">
                        <img src="/images/play-icon-white.png" alt=""/>
                        <span>Trailer</span>
                    </button>
                    <div className="details__contentMetaControls__addList">
                        <span></span>
                        <span></span>
                    </div>
                    <div className="details__contentMetaControls__groupWatch">
                        <div>
                            <img src="/images/group-icon.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="details__subtitle">
                    {detailData.subTitle}
                </div>
                <div className="details__description">
                    {detailData.description}
                </div>
            </div>
        </div>
    )
}

export default Details;