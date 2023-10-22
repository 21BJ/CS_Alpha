require('dotenv').config({ path: './../../../../.env' })


export async function BuyToken(account, amount) {

    let output = "";

    console.log("BuyToken start");
      
    await window.ethereum.request({
        method: 'BuyToken',
        params: [
            {
              from: account, 
              to: process.env.Action_ADDRESS,
              value: amount
            },
        ]
    })
    .then((result) => { console.log("Result: " + result + "\n"); output = result; })
    .catch((error) => { console.log("Error: " + error + "\n");  output = result; });
    
    console.log("BuyToken end");


    return output;
}


export async function getBalance(account) {

    let output = "";

    console.log("getBalance start");
      
    await window.ethereum.request({
        method: 'getBalance',
        params: [
            {
              from: account, 
              to: process.env.Action_ADDRESS,
            },
        ]
    })
    .then((result) => { console.log("Result: " + result + "\n"); output = result; })
    .catch((error) => { console.log("Error: " + error + "\n"); output = result; });
    
    console.log("getBalance end");

    return output;
}


export async function withdraw(account) {

    let output = "";

    console.log("withdraw Token start");
      
    await window.ethereum.request({
        method: 'withdraw',
        params: [
            {
              from: account, 
              to: process.env.Action_ADDRESS,
            },
        ]
    })
    .then((result) => { console.log("Result: " + result + "\n"); output = result; })
    .catch((error) => { console.log("Error: " + error + "\n"); output = result; });
    
    console.log("withdraw Token end");


    return output;

}

export async function getPriceForUnit(account) {

    let output = "";

    console.log("getPriceForUnit Token start");
      
    await window.ethereum.request({
        method: 'getPriceForUnit',
        params: [
            {
              from: account, 
              to: process.env.Action_ADDRESS,
            },
        ]
    })
    .then((result) => { console.log("Result: " + result + "\n"); output = result; })
    .catch((error) => { console.log("Error: " + error + "\n"); output = result; });
    
    console.log("getPriceForUnit Token end");

    return output;
}