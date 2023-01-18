import NFTSelect from '../components/NFTSelect';
import { useState, useEffect } from 'react';


import grass from "../assets/grass.png";
import sand from "../assets/sand.png";
import flames from "../assets/flames.png";
import flames2 from "../assets/flames2.png";
import water from "../assets/water.png";
import droplet from "../assets/droplets.png";
import cyber from "../assets/cyber.png";
import cyber2 from "../assets/cyber2.png";
import lightning from "../assets/lightning.png";


export default function Snacker() {

    const textures = [grass, sand, flames, flames2, water, droplet, cyber, cyber2, lightning];

    var randomNums = [1,2,3,4];
    var randomNums = generateRandomNumbers();


    function generateRandomNumbers(){
        var internalList: number[] = [];
        for (let i = 0; i < 4; i++) {
            let randomNumber = Math.floor(Math.random() * textures.length);
          
            // Check that the random number is not already in the array
            while (internalList.indexOf(randomNumber) > -1) {
              randomNumber = Math.floor(Math.random() * textures.length);
            }
          
            // Add the unique random number to the array
            internalList.push(randomNumber);
          }
        console.log(randomNums);
        return internalList;
    }

    return(
        <div className='SnackerContainer'>
            {/* <div style={{marginTop: "2rem", marginBottom: "10rem"}}>SNACKER</div>
            <ConnectButton/>
            {isConnected?  <div className='NFTSelector'>ContainerTest</div> :<div></div> } */}
            <NFTSelect backgroundTextureA={textures[randomNums[0]]} backgroundTextureB={textures[randomNums[1]]} bottomTexture={textures[randomNums[2]]}/>

        </div>

    );
}