import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useContractRead, usePrepareSendTransaction, useSendTransaction, useWaitForTransaction } from 'wagmi';
import { useState } from 'react';
import NFTSelect from '../components/NFTSelectMobile';


export default function connectPage() {
    const { isConnected } = useAccount();

    return(
        <div className='PageContainer'>
            {/* <div style={{marginTop: "2rem", marginBottom: "10rem"}}>SNACKER</div>
            <ConnectButton/>
            {isConnected?  <div className='NFTSelector'>ContainerTest</div> :<div></div> } */}
            {/* <NFTSelect/>
            <NFTSelect/> */}

        </div>
    );
}