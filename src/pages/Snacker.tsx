import NFTSelect from '../components/NFTSelect';


export default function Snacker() {
    return(
        <div className='SnackerContainer'>
            {/* <div style={{marginTop: "2rem", marginBottom: "10rem"}}>SNACKER</div>
            <ConnectButton/>
            {isConnected?  <div className='NFTSelector'>ContainerTest</div> :<div></div> } */}
            <NFTSelect/>
            <NFTSelect/>

        </div>

    );
}