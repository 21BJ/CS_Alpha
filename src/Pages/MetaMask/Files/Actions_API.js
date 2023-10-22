require('dotenv').config({ path: './../../../../.env' })


export async function setStone(account, avatarID, stoneID, stoneSlot) {

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
    .then((result) => { console.log("Result: " + result + "\n"); })
    .catch((error) => { console.log("Error: " + error + "\n"); });
    
    console.log("setStone end");

}

export async function setWearables(account, avatarID, wearableID, wearableSlot ) {

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
    .then((result) => { console.log("Result: " + result + "\n"); })
    .catch((error) => { console.log("Error: " + error + "\n"); });
        
    
    console.log("setWearables end");

}


export async function removeStone(account, avatarID, stoneID, stoneSlot) {

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
    .then((result) => { console.log("Result: " + result + "\n"); })
    .catch((error) => { console.log("Error: " + error + "\n"); });
    
    console.log("removeStone end");

}

export async function removeWearables(account, avatarID, wearableID, wearableSlot ) {

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
    .then((result) => { console.log("Result: " + result + "\n"); })
    .catch((error) => { console.log("Error: " + error + "\n"); });
    
    console.log("removeWearables end");

}


export async function getStoneInfo(account, avatarID, stoneSlot) {

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
    .then((result) => { console.log("Result: " + result + "\n"); })
    .catch((error) => { console.log("Error: " + error + "\n"); });
    
    console.log("getStoneInfo end");

}

export async function getWearableInfo(account, avatarID, wearableSlot ) {

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
    .then((result) => { console.log("Result: " + result + "\n"); })
    .catch((error) => { console.log("Error: " + error + "\n"); });
    
    console.log("getWearableInfo end");

}