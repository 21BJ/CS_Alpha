import {setStone, setWearables, removeStone, removeWearables, getStoneInfo, getWearableInfo} from "./Files/Actions_API";
import {createANewBox, openBox} from "./Files/Box_API";
import {mintingAvatar, canBeMinted} from "./Files/Minting_API";
import {Sell, Buy, retireNFTFromShop, setBaseNFTResellPrice, getBaseNFTResellPrice, getNFTResellPriceById, getShopInfoListById, withdrawShop} from "./Files/Shop_API";
import {BuyToken, getBalance, withdraw} from "./Files/Token_API";



export default async function IDForApi (ServiceID, API_ID, inputs, account) {

    console.log("ServiceID: " + ServiceID);
    console.log("API_ID: " +    API_ID);
 

    if (ServiceID == 0) { console.log("Actions");

        if (API_ID == 0) await setStone(account, inputs[0], inputs[1], inputs[2])
        if (API_ID == 1) await setWearables(account, inputs[0], inputs[1], inputs[2])
        if (API_ID == 2) await removeStone(account, inputs[0], inputs[1], inputs[2])
        if (API_ID == 3) await removeWearables(account, inputs[0], inputs[1], inputs[2])
        if (API_ID == 4) await getStoneInfo(account, inputs[0], inputs[1])
        if (API_ID == 5) await getWearableInfo(account, inputs[0], inputs[1])

    } else if (ServiceID == 1) { console.log("Box");

        if (API_ID == 0) await createANewBox(account, inputs[0], inputs[1])
        if (API_ID == 1) await openBox(account, inputs[0])

    } else if (ServiceID == 2) { console.log("Minting");

        if (API_ID == 0) await mintingAvatar(account, inputs[0], inputs[1])
        if (API_ID == 1) await canBeMinted(account, inputs[0], inputs[1])

    } else if (ServiceID == 3) { console.log("Shop");

        if (API_ID == 0) await Sell(account, inputs[0], inputs[1])
        if (API_ID == 1) await Buy(account, inputs[0])
        if (API_ID == 2) await retireNFTFromShop(account, inputs[0])
        if (API_ID == 3) await setBaseNFTResellPrice(account, inputs[0])
        if (API_ID == 4) await getBaseNFTResellPrice(account)
        if (API_ID == 5) await getNFTResellPriceById(account, inputs[0])
        if (API_ID == 6) await getShopInfoListById(account, inputs[0])
        if (API_ID == 7) await withdrawShop()

    } else if (ServiceID == 4) { console.log("Token");

        if (API_ID == 0) await BuyToken(account, inputs[0])
        if (API_ID == 1) await getBalance(account)
        if (API_ID == 2) await withdraw(account)

    }


    // TODO return 
    return true;

}