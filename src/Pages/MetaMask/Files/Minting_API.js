require('dotenv').config({ path: './../../../../.env' })


export async function mintingAvatar(account, idNFT1, idNFT2) {

    let output = "";
    
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
    .then((result) => { console.log("Result: " + result + "\n"); output = result; })
    .catch((error) => { console.log("Error: " + error + "\n"); output = error; });
    
    console.log("mintingAvatar end");

    
    return output;
}


export async function canBeMinted(account, idNFT1, idNFT2) {

    let output = "";
    
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
    .then((result) => { console.log("Result: " + result + "\n"); output = result; })
    .catch((error) => { console.log("Error: " + error + "\n"); output = error; });
    
    console.log("canBeMinted end");

    
    return output;
}


