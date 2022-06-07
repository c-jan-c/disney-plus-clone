import React from "react";
import './Home.css'
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommended from "./Recommended";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { onSnapshot, collection} from 'firebase/firestore'

function Home(props){

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisney = [];
    let originals = [];
    let trending = [];


    useEffect(() => {
        
       onSnapshot(collection(db, 'movies'),(snapshot) => {
            snapshot.docs.map((doc) => {
                switch(doc.data().type){
                    case 'recommend':
                        recommends = [...recommends, {id: doc.id, ...doc.data()}];
                        break;
                    case 'new':
                        newDisney =[...newDisney, {id: doc.id, ...doc.data()}]
                        break;
                    case 'original':
                        originals = [...originals, {id: doc.id, ...doc.data()}]
                        break;
                    case 'trending':
                        trending = [...trending, {id: doc.id, ...doc.data()}]
                        break;
                    default:
                        break;
                }
            })
         

            dispatch(setMovies({
                recommend: recommends,
                newDisney: newDisney,
                original: originals,
                trending: trending

                })
            )
       });
    }, [userName]) 

    return(
        <div className="home">
                <ImgSlider/>
                <Viewers/>
                <Recommended />
                <NewDisney />
                <Originals />
                <Trending />
                <div className="home__background">

                </div>
        </div>
    )
}

export default Home;