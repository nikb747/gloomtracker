const campaign = {
    id: 101,
    partyName: 'Some Party Name',
    location: 'Some Place',
    notes: [
        { id: 201, campaignId: 101, timestamp: '12/01/2018 22:56', description: 'Started campaign Nik, Alex, David' },
        { id: 202, campaignId: 101, timestamp: '12/02/2018 22:56', description: 'something happened, yikes!' },
    ],
    achievements: [
        { id: 301, campaignId: 101, achievementId: 1, title: 'City Rule: Militaristic' },
        { id: 302, campaignId: 101, achievementId: 7, title: 'Party Achievement: First Steps' },
    ],
    currentReputation: 0, // computed?
    reputationLog: [
        { id: 401, campaignId: 101, changeValue: -2, description: 'Made some townspeople mad or something' },
        { id: 402, campaignId: 101, changeValue: 1, description: 'helped somebody' },
        { id: 403, campaignId: 101, changeValue: 1, description: 'saved a cat' },
    ],
    partyMembers: [
        { 
            id: 501,
            campaignId: 101,
            playerId: 601,
            characterClass: 'mindthief',
            // some more stuff specific to character or class?
            player: {
                id: 601,
                name: 'Nik',
            },
            currentXp: 12, // calculated?
            xpLog: [
                { id: 701, partyMemberId: 501, changeValue: 2, description: null },
                { id: 702, partyMemberId: 501, changeValue: 2, description: null },
                { id: 703, partyMemberId: 501, changeValue: 2, description: null },
                { id: 704, partyMemberId: 501, changeValue: 6, description: 'bonus xp for completing scenario 1' },
            ],
            currentGold: 2, // calculated?
            goldLog: [
                { id: 801, partyMemberId: 501, changeValue: 30, description: "starting gold" },
                { id: 802, partyMemberId: 501, changeValue: -20, description: "bought a hat" },
                { id: 803, partyMemberId: 501, changeValue: -10, description: "bought a potion" },
                { id: 804, partyMemberId: 501, changeValue: 2, description: "loot retrieved" },
            ],
            items: [
                { id: 901, partyMemberId: 501, itemId: 1001, name: 'hat' },
                { id: 902, partyMemberId: 501, itemId: 1002, name: 'potion' },
            ]
        }
    ],
};

const ACHIEVMENTS = [ // all the achievements?
    { id: 0, title: 'Something Something' },
    { id: 1, title: 'City Rule: Militaristic' },
    { id: 2, title: 'Something Something' },
    { id: 3, title: 'Something Something' },
    { id: 4, title: 'Something Something' },
    { id: 5, title: 'Something Something' },
    { id: 6, title: 'Something Something' },
    { id: 7, title: 'Party Achievement: First Steps' },
    { id: 8, title: 'Something Something' },
    { id: 9, title: 'Something Something' },
]

const REPUTATION_TABLE = [
    { min: 19,  max: 20,  shopPriceModifier: -5 },
    { min: 15,  max: 18,  shopPriceModifier: -4 },
    { min: 11,  max: 14,  shopPriceModifier: -3 },
    { min: 7,   max: 10,  shopPriceModifier: -2 },
    { min: 3,   max: 6,   shopPriceModifier: -1 },
    { min: -2,  max: 2,   shopPriceModifier: 0  },
    { min: -6,  max: -3,  shopPriceModifier: 1  },
    { min: -10, max: -7,  shopPriceModifier: 2  },
    { min: -14, max: -11, shopPriceModifier: 3  },
    { min: -18, max: -15, shopPriceModifier: 4  },
    { min: -20, max: -19, shopPriceModifier: 5  },
];