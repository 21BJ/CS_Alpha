require('dotenv').config({ path: './../../../../.env' })


export async function setStone(account, avatarID, stoneID, stoneSlot) {

    let output = "";
    
    console.log("setStone start");
    
    window.ethereum.request({
        method: 'setStone',
        params: [
            {
              from: account, 
              to: process.env.Action_ADDRESS,
              value: [avatarID, stoneID, stoneSlot]
            },
        ]
    })
    .then((result) => { console.log("Result: " + result + "\n"); output = result; })
    .catch((error) => { console.log("Error: " + error + "\n"); output = result; });
    
    console.log("setStone end");

    
    return output;
}

export async function setWearables(account, avatarID, wearableID, wearableSlot ) {

    let output = "";
    
    console.log("setWearables start");
    
    window.ethereum.request({
        method: 'setWearables',
        params: [
            {
              from: account, 
              to: process.env.Action_ADDRESS,
              value: [avatarID, wearableID, wearableSlot]
            },
        ]
    })
    .then((result) => { console.log("Result: " + result + "\n"); output = result; })
    .catch((error) => { console.log("Error: " + error + "\n"); output = result; });
        
    
    console.log("setWearables end");

    
    return output;
}


export async function removeStone(account, avatarID, stoneID, stoneSlot) {

    let output = "";
    
    console.log("removeStone start");

    
    window.ethereum.request({
        method: 'removeStone',
        params: [
            {
              from: account, 
              to: process.env.Action_ADDRESS,
              value: [avatarID, stoneID, stoneSlot]
            },
        ]
    })
    .then((result) => { console.log("Result: " + result + "\n"); output = result; })
    .catch((error) => { console.log("Error: " + error + "\n"); output = result; });
    
    console.log("removeStone end");

    
    return output;
}

export async function removeWearables(account, avatarID, wearableID, wearableSlot ) {

    let output = "";
    
    console.log("removeWearables start");
    
    window.ethereum.request({
        method: 'removeWearables',
        params: [
            {
              from: account, 
              to: process.env.Action_ADDRESS,
              value: [avatarID, wearableID, wearableSlot]
            },
        ]
    })
    .then((result) => { console.log("Result: " + result + "\n"); output = result; })
    .catch((error) => { console.log("Error: " + error + "\n"); output = result; });
    
    console.log("removeWearables end");
    
    return output;

}


export async function getStoneInfo(account, avatarID, stoneSlot) {

    let output = "";
    
    console.log("getStoneInfo start");
    
    window.ethereum.request({
        method: 'getStoneInfo',
        params: [
            {
              from: account, 
              to: process.env.Action_ADDRESS,
              value: [avatarID, stoneSlot]
            },
        ]
    })
    .then((result) => { console.log("Result: " + result + "\n"); output = result; })
    .catch((error) => { console.log("Error: " + error + "\n"); output = result; });
    
    console.log("getStoneInfo end");

    
    return output;
}

export async function getWearableInfo(account, avatarID, wearableSlot ) {

    let output = "";
    
    console.log("getWearableInfo start");
    
    window.ethereum.request({
        method: 'getWearableInfo',
        params: [
            {
              from: account, 
              to: process.env.Action_ADDRESS,
              value: [avatarID, wearableSlot]
            },
        ]
    })
    .then((result) => { console.log("Result: " + result + "\n"); output = result; })
    .catch((error) => { console.log("Error: " + error + "\n"); output = result; });
    
    console.log("getWearableInfo end");

    
    return output;
}