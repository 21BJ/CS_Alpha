require('dotenv').config({ path: './../../../../.env' })


export async function Sell(account, _tokenId, price) {

    let output = "";

    console.log("Sell start");
      
    window.ethereum.request({
        method: 'Sell',
        params: [
            {
              from: account, 
              to: process.env.Action_ADDRESS,
              value: [_tokenId, price]
            },
        ]
    })
    .then((result) => { console.log("Result: " + result + "\n"); output = result; })
    .catch((error) => { console.log("Error: " + error + "\n"); output = error; });
    
    console.log("Sell end");
    
    return output;

}


export async function Buy (account, _tokenId) {

    let output = "";

    console.log("Buy start");
      
    window.ethereum.request({
        method: 'Buy',
        params: [
            {
              from: account, 
              to: process.env.Action_ADDRESS,
              value: _tokenId
            },
        ]
    })
    .then((result) => { console.log("Result: " + result + "\n"); output = result; })
    .catch((error) => { console.log("Error: " + error + "\n"); output = error; });
    
    console.log("Buy end");
    
    return output;

}


export async function retireNFTFromShop (account, _tokenId ) {
    
    let output = "";

    console.log("RetireNFTFromShop start");
      
    window.ethereum.request({
        method: 'retireNFTFromShop',
        params: [
            {
              from: account, 
              to: process.env.Action_ADDRESS,
              value: _tokenId
            },
        ]
    })
    .then((result) => { console.log("Result: " + result + "\n"); output = result; })
    .catch((error) => { console.log("Error: " + error + "\n"); output = error; });
    
    console.log("RetireNFTFromShop end");
    
    return output;
}

export async function setBaseNFTResellPrice (account, _baseNFTResellPrice) {
    
    let output = "";

    console.log("SetBaseNFTResellPrice start");
      
    window.ethereum.request({
        method: 'setBaseNFTResellPrice',
        params: [
            {
              from: account, 
              to: process.env.Action_ADDRESS,
              value: _baseNFTResellPrice
            },
        ]
    })
    .then((result) => { console.log("Result: " + result + "\n"); output = result; })
    .catch((error) => { console.log("Error: " + error + "\n"); output = error; });
    
    console.log("SetBaseNFTResellPrice end");
    
    return output;
}

export async function getBaseNFTResellPrice (account) {
    
    let output = "";
    
    console.log("GetBaseNFTResellPrice start");
      
    window.ethereum.request({
        method: 'getBaseNFTResellPrice',
        params: [
            {
              from: account, 
              to: process.env.Action_ADDRESS,
            },
        ]
    })
    .then((result) => { console.log("Result: " + result + "\n"); output = result; })
    .catch((error) => { console.log("Error: " + error + "\n"); output = error; });
    
    console.log("GetBaseNFTResellPrice end");
    
    return output;
}

export async function getNFTResellPriceById (account, _tokenId) {
    
    let output = "";
    
    console.log("GetNFTResellPriceByIdBuy start");
      
    window.ethereum.request({
        method: 'getNFTResellPriceById',
        params: [
            {
              from: account, 
              to: process.env.Action_ADDRESS,
              value: _tokenId
            },
        ]
    })
    .then((result) => { console.log("Result: " + result + "\n"); output = result; })
    .catch((error) => { console.log("Error: " + error + "\n"); output = error; });
    
    console.log("GetNFTResellPriceByIdBuy end");
    
    return output;
}

export async function getShopInfoListById (account, _tokenId) {
    
    let output = "";
    
    console.log("GetShopInfoListById start");
      
    window.ethereum.request({
        method: 'getShopInfoListById',
        params: [
            {
              from: account, 
              to: process.env.Action_ADDRESS,
              value: _tokenId
            },
        ]
    })
    .then((result) => { console.log("Result: " + result + "\n"); output = result; })
    .catch((error) => { console.log("Error: " + error + "\n"); output = error; });
    
    console.log("GetShopInfoListById end");
    
    return output;
}

export async function withdrawShop (account) {
    
    let output = "";
    
    console.log("Withdraw start");
      
    window.ethereum.request({
        method: 'withdraw',
        params: [
            {
              from: account, 
              to: process.env.Action_ADDRESS,
            },
        ]
    })
    .then((result) => { console.log("Result: " + result + "\n"); output = result; })
    .catch((error) => { console.log("Error: " + error + "\n"); output = error; });
    
    console.log("Withdraw end");

    return output;
}
