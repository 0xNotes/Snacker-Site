import grass from "../assets/grass.png";
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";

export default function NFTSelect() {
    return(
        <div className="NFTContainer" style={{backgroundImage: `url(${grass})`, objectFit: "fill"}}>
            <div className="FeaturedNFT">
                TEST
            </div>
            <div className="NFTSelector">
            <img src={arrowLeft}></img>
            <div className="NFTPreview"/>
            <div className="NFTPreview"/>
            <div className="NFTPreview"/>
            <div className="NFTPreview"/>
            <div className="NFTPreview"/>
            <img src={arrowRight}></img>

            </div>
        </div>

    );
}