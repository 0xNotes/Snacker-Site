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
    backgroundTextureA: any;
    backgroundTextureB: any;
    bottomTexture: any;

};


export default function NFTSelect({
    backgroundTextureA,
    backgroundTextureB,
    bottomTexture,
}: Props) {

    const pics = [Question, Miaura, RadBro, BoredMiladyMaker, Ghiblady, McLady, Bitch, Remi];
    const names = ["???", "Miaura", "Radbro", "Bored Milady Maker", "Ghiblady", "McLady", "Milady, That B.I.T.C.H", "Remilio Babies"];
    const id = [0, 21, 1882, 152, 221, 1038, 50, 29];

    //Do a useeffect to handle a list fix if pics < 5 items 
    const [contentPosition, setContentPosition] = useState(0);
    const [stylePosition, setStylePosition] = useState(0);
    const [selectContentImage, setSelectContentImage] = useState(true);

    function numberFix(inp: number) {
        while (inp < 0) {
            inp += pics.length;
        }
        return (inp % pics.length)
    }

    function setPosition(inp: number) {
        if (selectContentImage) {
            setContentPosition(numberFix(contentPosition + inp));
        }
        else {
            setStylePosition(numberFix(stylePosition + inp));
        }
    }


    return (

        <div className="ComponentContainer">
            <div className="NFTSelectContainer">
                <div className="NFTContainer" style={{ backgroundImage: `url(${backgroundTextureA})`, objectFit: "fill", marginRight: "10rem" }}>
                    <div className="FeatureContainer" onClick={() => setSelectContentImage(true)}>
                        <div className="FeatureTextContainer">{names[contentPosition] + " #" + id[contentPosition]}</div>
                        <img className="FeaturedNFT" src={pics[contentPosition]} />
                        <button className="ApproveButton">APPROVE</button>
                    </div>
                </div>

                <div className="NFTContainer" style={{ backgroundImage: `url(${backgroundTextureB})`, objectFit: "fill" }}>
                    <div className="FeatureContainer" onClick={() => setSelectContentImage(false)}>
                        <div className="FeatureTextContainer">{names[stylePosition] + " #" + id[stylePosition]}</div>
                        <img className="FeaturedNFT" src={pics[stylePosition]} />
                        <button className="ApproveButton">APPROVE</button>
                    </div>
                </div>
            </div>



            <div className="NFTSelector" style={{ backgroundImage: `url(${bottomTexture})`, objectFit: "fill" }}>

                <button className="ArrowContainer" onClick={() => setPosition(-1)}>
                    <div className="ArrowLeft" />
                </button>
                <img className="NFTPreview" src={pics[numberFix(contentPosition - 2)]} />
                <img className="NFTPreview" src={pics[numberFix(contentPosition - 1)]} />
                <img className="NFTCenter" src={pics[numberFix(contentPosition)]} />
                <img className="NFTPreview" src={pics[numberFix(contentPosition + 1)]} />
                <img className="NFTPreview" src={pics[numberFix(contentPosition + 2)]} />
                <button className="ArrowContainer" onClick={() => setPosition(1)}>
                    <div className="ArrowRight" />
                </button>
            </div>

        </div>

    );
}


