require('dotenv').config({ path: './../../../../.env' })


export async function BuyToken(account, amount) {

    console.log("BuyToken start");
      
    window.ethereum.request({
        method: 'BuyToken',
        params: [
            {
              from: account, 
              to: process.env.Action_ADDRESS,
              value: amount
            },
        ]
    })
    .then((result) => { console.log("Result: " + result + "\n"); })
    .catch((error) => { console.log("Error: " + error + "\n"); });
    
    console.log("BuyToken end");

}


export async function getBalance(account) {

    console.log("getBalance start");
      
    window.ethereum.request({
        method: 'getBalance',
        params: [
            {
              from: account, 
              to: process.env.Action_ADDRESS,
            },
        ]
    })
    .then((result) => { console.log("Result: " + result + "\n"); })
    .catch((error) => { console.log("Error: " + error + "\n"); });
    
    console.log("getBalance end");

}


export async function withdraw(account) {

    console.log("withdraw Token start");
      
    window.ethereum.request({
        method: 'withdraw',
        params: [
            {
              from: account, 
              to: process.env.Action_ADDRESS,
            },
        ]
    })
    .then((result) => { console.log("Result: " + result + "\n"); })
    .catch((error) => { console.log("Error: " + error + "\n"); });
    
    console.log("withdraw Token end");

}

export async function getPriceForUnit(account) {

    console.log("getPriceForUnit Token start");
      
    window.ethereum.request({
        method: 'getPriceForUnit',
        params: [
            {
              from: account, 
              to: process.env.Action_ADDRESS,
            },
        ]
    })
    .then((result) => { console.log("Result: " + result + "\n"); })
    .catch((error) => { console.log("Error: " + error + "\n"); });
    
    console.log("getPriceForUnit Token end");

}