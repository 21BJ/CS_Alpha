require('dotenv').config({ path: './../../../../.env' })


export async function createANewBox(account, objKey, r1) {
    
    let output = "";
    
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
    .then((result) => { console.log("Result: " + result + "\n"); output = result; })
    .catch((error) => { console.log("Error: " + error + "\n"); output = result; });


    console.log("CreateANewBox end");

    
    return output;
}



export async function openBox(account, boxKey ) {
 
    let output = "";
    
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
    .then((result) => { console.log("Result: " + result + "\n"); output = result; })
    .catch((error) => { console.log("Error: " + error + "\n"); output = result; });
    // Send the transaction
    
    console.log("OpenBox end");

    
    return output;
}
