function getAllChildren() {

    const testData = [
        {
            brand:"PSE Stinger ATK",
            condition:"Good",
            value:327.00,
            quantity:1,
            location:"Widewell",
            notes:"Compound 50# Right Handed"
        },
        {
            brand:"Easton X7",
            condition:"Good",
            value:15.00,
            quantity:8,
            location:"YMCA",
            notes:"28.5\" 2014"
        },
        {
            brand:"Easton ACC",
            condition:"Good",
            value:18,
            quantity:10,
            location:"Widewell",
            notes:"28.5\" 630"
        },
        {
            brand:"WA 60cm Face",
            condition:"Used",
            value:0.28,
            quantity:25,
            location:"YMCA",
            notes:"Three Spot"
        },
        {
            brand:"A-Frame Stand",
            condition:"Okay",
            value:35.00,
            quantity:5,
            location:"Widewell",
            notes:""
        },
        {
            brand:"Bowmaster Portable Bow Press",
            condition:"Good",
            value:100.00,
            quantity:1,
            location:"Widewell",
            notes:""
        },
        {
            type:"PPE",
            brand:"Arm Guard",
            condition:"Okay",
            value:5.00,
            quantity:10,
            location:"Widewell",
            notes:""
        }
        
    ];

    testData.sort((a, b) => (a.brand > b.brand ? 1 : -1));

    return testData;
}

// https://stackoverflow.com/questions/39021870/fetch-returns-promise-instead-of-actual-data-even-after-using-then