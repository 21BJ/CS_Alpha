require('dotenv').config({ path: './../../../../.env' })


export async function mintingAvatar(account, idNFT1, idNFT2) {

    console.log("mintingAvatar start");
    
    window.ethereum.request({
        method: 'mintingAvatar',
        params: [
            {
              from: account, 
              to: process.env.Action_ADDRESS,
              value: [idNFT1, idNFT2]
            },
        ]
    })
    .then((result) => { console.log("Result: " + result + "\n"); })
    .catch((error) => { console.log("Error: " + error + "\n"); });
    
    console.log("mintingAvatar end");

}


export async function canBeMinted(account, idNFT1, idNFT2) {

    console.log("canBeMinted start");
    
    window.ethereum.request({
        method: 'canBeMinted',
        params: [
            {
              from: account, 
              to: process.env.Action_ADDRESS,
              value: [idNFT1, idNFT2]
            },
        ]
    })
    .then((result) => { console.log("Result: " + result + "\n"); })
    .catch((error) => { console.log("Error: " + error + "\n"); });
    
    console.log("canBeMinted end");

}


