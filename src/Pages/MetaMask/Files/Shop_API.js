require('dotenv').config({ path: './../../../../.env' })


export async function Sell(account, _tokenId, price) {

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
    .then((result) => { console.log("Result: " + result + "\n"); })
    .catch((error) => { console.log("Error: " + error + "\n"); });
    
    console.log("Sell end");

}


export async function Buy (account, _tokenId) {

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
    .then((result) => { console.log("Result: " + result + "\n"); })
    .catch((error) => { console.log("Error: " + error + "\n"); });
    
    console.log("Buy end");

}


export async function retireNFTFromShop (account, _tokenId ) {
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
    .then((result) => { console.log("Result: " + result + "\n"); })
    .catch((error) => { console.log("Error: " + error + "\n"); });
    
    console.log("RetireNFTFromShop end");
}

export async function setBaseNFTResellPrice (account, _baseNFTResellPrice) {
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
    .then((result) => { console.log("Result: " + result + "\n"); })
    .catch((error) => { console.log("Error: " + error + "\n"); });
    
    console.log("SetBaseNFTResellPrice end");
}

export async function getBaseNFTResellPrice (account) {
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
    .then((result) => { console.log("Result: " + result + "\n"); })
    .catch((error) => { console.log("Error: " + error + "\n"); });
    
    console.log("GetBaseNFTResellPrice end");
}

export async function getNFTResellPriceById (account, _tokenId) {
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
    .then((result) => { console.log("Result: " + result + "\n"); })
    .catch((error) => { console.log("Error: " + error + "\n"); });
    
    console.log("GetNFTResellPriceByIdBuy end");
}

export async function getShopInfoListById (account, _tokenId) {
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
    .then((result) => { console.log("Result: " + result + "\n"); })
    .catch((error) => { console.log("Error: " + error + "\n"); });
    
    console.log("GetShopInfoListById end");
}

export async function withdrawShop (account) {
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
    .then((result) => { console.log("Result: " + result + "\n"); })
    .catch((error) => { console.log("Error: " + error + "\n"); });
    
    console.log("Withdraw end");
}
