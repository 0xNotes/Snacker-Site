import NFTSelect from '../components/NFTSelect';
import grass from "../assets/grass.png";
import sand from "../assets/sand.png";


export default function Snacker() {
    return(
        <div className='SnackerContainer'>
            {/* <div style={{marginTop: "2rem", marginBottom: "10rem"}}>SNACKER</div>
            <ConnectButton/>
            {isConnected?  <div className='NFTSelector'>ContainerTest</div> :<div></div> } */}
            <NFTSelect backgroundTexture={grass}/>
            <NFTSelect backgroundTexture={sand}/>

        </div>

    );
}