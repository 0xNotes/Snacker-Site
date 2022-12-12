
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";

type Props = {
    backgroundTexture: any;

};


export default function NFTSelect({
    backgroundTexture,
    }: Props) {
    return (
        <div className="NFTContainer" style={{ backgroundImage: `url(${backgroundTexture})`, objectFit: "fill" }}>
            <div className="FeaturedNFT">
                TEST
            </div>
            <div className="NFTSelector">
                <img src={arrowLeft}></img>
                <div className="NFTPreview" />
                <div className="NFTPreview" />
                <div className="NFTPreview" />
                <div className="NFTPreview" />
                <div className="NFTPreview" />
                <img src={arrowRight}></img>

            </div>
        </div>

    );
}