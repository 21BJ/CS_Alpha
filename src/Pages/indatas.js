const ListButtons = [
    {
        file: "Wallet connection:",
        functionPresence: false,
        functions: []

    },
    {
        file: "Actions",
        functionPresence: true,
        functions: [
            {
                Action: "setStone",
                info: {
                    variables: [
                        {name: "avatarID", type: "uint"},
                        {name: "stoneID", type: "uint"}, 
                        {name: "stoneSlot", type: "uint"}
                    ],
                    variablesTypes: [],
                        output: {},
                    isPayable: false,
                    isPrivate: false,
                        description: "Set to Avatar a stone in a slot"
                    }
            },
            {
                Action: "setWearables",
                info : {
                    variables: [
                        {name: "avatarID", type: "uint"},
                        {name: "wearableID", type: "uint"}, 
                        {name: "wearableSlot", type: "uint"}
                    ],
                    variablesTypes: [],
                    output: {},
                    isPayable: false,
                    isPrivate: false,
                    description: "Set to Avatar a wearable in a slot"
                }
            },
            { 
                Action: "removeStone",
                info : {
                    variables: [
                        {name: "avatarID", type: "uint"},
                        {name: "stoneID", type: "uint"}, 
                        {name: "stoneSlot", type: "uint"}
                    ],
                    variablesTypes: [],
                    output: {},
                    isPayable: false,
                    isPrivate: false,
                    description: "Remove to Avatar a stone in a slot"
                }
            },
            { 
                Action: "removeWearables",
                info : {
                    variables: [
                        {name: "avatarID", type: "uint"},
                        {name: "wearableID", type: "uint"}, 
                        {name: "wearableSlot", type: "uint"}
                    ],
                    variablesTypes: [],
                    output: {},
                    isPayable: false,
                    isPrivate: false,
                    description: "Remove to Avatar a wearable in a slot"
                }
            },
            { 
                Action: "getStoneInfo",
                info : {
                    variables: [
                        {name: "avatarID", type: "uint"},
                        {name: "stoneSlot", type: "uint"}
                    ],
                    variablesTypes: [],
                    output: {},
                    isPayable: false,
                    isPrivate: false,
                    description: "Get from a Avatar info about a stone in a slot"
                }
            },
            { 
                Action: "getWearableInfo",
                info : {
                    variables: [
                        {name: "avatarID", type: "uint"},
                        {name: "wearableSlot", type: "uint"}
                    ],
                    variablesTypes: [],
                    output: {},
                    isPayable: false,
                    isPrivate: false,
                    description: "Get from a Avatar info about a wearable in a slot"
                }
            }
        ],
    },
    {
        file: "Box",
        functionPresence: true,
        functions: [
            {
                Action: "createANewBox",
                info : {
                    variables: [
                        {name: "objKey", type: "uint"},
                        {name: "r1", type: "uint"}
                    ],
                    variablesTypes: [],
                    output: {},
                    isPayable: false,
                    isPrivate: true,
                    description: "Permit other smart contract to create a new box."
                }
            },
            {
                Action: "openBox",
                info : {
                    variables: [
                        {name: "boxKey", type: "uint"}
                    ],
                    variablesTypes: [],
                    output: {},
                    isPayable: false,
                    isPrivate: false,
                    description: "Permit to open a box"
                }
            }
        ]

    },
    {
        file: "Minting",
        functionPresence: true,
        functions: [
            {
                Action: "mintingAvatar",
                info : {
                    variables: [
                        {name: "idNFT1", type: "uint"},
                        {name: "idNFT2", type: "uint"}
                    ],
                    variablesTypes: [],
                    output: {},
                    isPayable: true,
                    isPrivate: false,
                    description: "Permit user to take 2 avatar and create a new one."
                }
            },
            {
                Action: "canBeMinted",
                info: {
                    variables: [
                        {name: "idNFT1", type: "uint"},
                        {name: "idNFT2", type: "uint"}
                    ],
                    variablesTypes: [],
                    output: {},
                    isPayable: false,
                    isPrivate: false,
                    description: "Check if you can use the function: \"mintingAvatar\"."
                }
            }
        ]
    },
    {
        file: "Shop",
        functionPresence: true,
        functions: [
            {
                Action: "sell",
                info: {
                    variables: [
                        {name: "_tokenId", type: "uint"},
                        {name: "price", type: "uint"}
                    ],
                    output: {},
                    isPayable: false,
                    isPrivate: false,
                    description: "It allows you to put your NFTs for sale"
                }
            },
            {   
                Action: "buy",
                info: {
                    variables: [
                        {name: "_tokenId", type: "uint"}
                    ],
                    output: {},
                    isPayable: true,
                    isPrivate: false,
                    description: "Allows you to buy an NFT from the shop"
                }
            },
            {
                Action: "retireNFTFromShop",
                info: {
                    variables: [
                        {name: "_tokenId", type: "uint"}
                    ],
                    output: {},
                    isPayable: false,
                    isPrivate: false,
                    description: "It allows the user, who has NFTs in the shop, to remove them from sale"
                }
            },
            {
                Action: "setBaseNFTResellPrice",
                info: {
                    variables: [
                        {name: "_baseNFTResellPrice", type: "uint"}
                    ],
                    output: {},
                    isPayable: false,
                    isPrivate: true,
                    description: "This function is private and allows you to set the fee percentage that is imposed on the buyer at the time of purchase"
                }
            },
            {
                Action: "getBaseNFTResellPrice",
                info: {
                    variables: [
                        {name: "_tokenId", type: "uint"}
                    ],
                    output: {},
                    isPayable: false,
                    isPrivate: false,
                    description: "It allows you to know the fee cost that is applied to the sale of smart contracts"
                }
            },
            {
                Action: "getNFTResellPriceById",
                info: {
                    variables: [
                        {name: "_tokenId", type: "uint"}
                    ],
                    output: {},
                    isPayable: false,
                    isPrivate: false,
                    description: "It allows you to know the cost of selling an NFT with the sales fee"
                }
            },
            {
                Action: "getShopInfoListById",
                info: {
                    variables: [],
                    variablesTypes: [],
                    output: {},
                    isPayable: false,
                    isPrivate: false,
                    description: "Allows you to obtain the ID of the NFTs on sale in the shop"
                }
            },
            {
                Action: "withdraw",
                info: {
                    variables: [],
                    variablesTypes: [],
                    output: {},
                    isPayable: false,
                    isPrivate: true,
                    description: "Function that can only be invoked by the owner of the smart contracts. Allows you to withdraw fees from the sale of NFTs."
                }
            }
        ]
    },
    {
        file: "Token21BJ",
        functionPresence: true,
        functions: [
            {
                Action: "buyToken",
                info: {
                    variables: [
                        {name: "quantity", type: "uint"}
                    ],
                    variablesTypes: [],
                    output: {},
                    isPayable: false,
                    isPrivate: false,
                        description: "Permit to buy a token"
                    }
            },
            {
                Action: "getQuantity",
                info: {
                    variables: [],
                    variablesTypes: [],
                    output: {},
                    isPayable: false,
                    isPrivate: false,
                        description: "Return quantity of token of current user"
                    }
            },
            {
                Action: "withdraw",
                info: {
                    variables: [],
                    variablesTypes: [],
                    output: {},
                    isPayable: false,
                    isPrivate: false,
                        description: "Permit to withdraw"
                    }
            }
        ]
    }
]


export default ListButtons;
