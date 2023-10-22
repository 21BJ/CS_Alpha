require('dotenv').config({ path: './../../../../.env' })


export async function createANewBox(account, objKey, r1) {
    
    console.log("CreateANewBox start");
    
    window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [
            {
              from: account, 
              to: process.env.Action_ADDRESS,
              value: [objKey, r1]
            },
        ]
    })
    .then((result) => { console.log("Result: " + result + "\n"); })
    .catch((error) => { console.log("Error: " + error + "\n"); });


    console.log("CreateANewBox end");

}



export async function openBox(account, boxKey ) {
 
    console.log("openBox start");

    window.ethereum.request({
        method: 'openBox',
        params: [
            {
              from: account, 
              to: process.env.Action_ADDRESS,
              value: boxKey
            },
        ]
    })
    .then((result) => { console.log("Result: " + result + "\n"); })
    .catch((error) => { console.log("Error: " + error + "\n"); });
    // Send the transaction
    
    console.log("OpenBox end");

}
