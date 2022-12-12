
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";

import Miaura from "../assets/milady-aura.jpg";
import RadBro from "../assets/radbro.jpg";
import BoredMiladyMaker from "../assets/bored-milady2.jpg";
import Ghiblady from "../assets/ghiblady.jpg";
import McLady from "../assets/mclady.jpg";
import Bitch from "../assets/milady-that-bitch.jpg";
import Remi from "../assets/rem_baby.jpg";
import Question from "../assets/question.png";


import { useState } from 'react';


type Props = {
    backgroundTexture: any;
    bottomTexture: any;

};



export default function NFTSelect({
    backgroundTexture,
    bottomTexture,
    }: Props) {
    
    const pics = [Question, Miaura, RadBro, BoredMiladyMaker, Ghiblady, McLady, Bitch, Remi];
    const names =["???","Miaura", "Radbro", "Bored Milady Maker", "Ghiblady", "McLady", "Milady, That B.I.T.C.H", "Remilio Babies"];
    const id = [0, 21, 1882, 152, 221, 1038, 50, 29];

    //Do a useeffect to handle a list fix if pics < 5 items 
    const [position, setPosition] = useState(0);

    function numberFix(inp: number){
        while(inp < 0){
            inp += pics.length;
        }
        return(inp % pics.length)
    }
    

    return (
        <div className="NFTContainer" style={{ backgroundImage: `url(${backgroundTexture})`, objectFit: "fill" }}>


            <div className="FeatureContainer">
            <div className="FeatureTextContainer">{names[position] + " #" + id[position]}</div>
            <img className="FeaturedNFT" src={pics[position]}/>
            <button className="ApproveButton">APPROVE</button>
            </div>


            <div className="NFTSelector" style={{ backgroundImage: `url(${bottomTexture})`, objectFit: "fill" }}>
                <img src={arrowLeft} onClick={() => setPosition(numberFix(position-1))}></img>
                <img className="NFTPreview" src={pics[numberFix(position-2)]}/>
                <img className="NFTPreview" src={pics[numberFix(position-1)]}/>
                <img className="NFTCenter" src={pics[numberFix(position)]}/>
                <img className="NFTPreview" src={pics[numberFix(position+1)]}/>
                <img className="NFTPreview" src={pics[numberFix(position+2)]}/>
                <img src={arrowRight} onClick={() => setPosition(numberFix(position+1))}></img>

            </div>
        </div>

    );
}