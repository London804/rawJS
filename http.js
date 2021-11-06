    // APPEND STRINGS

function getCards() {
    let cardNumber;
    let cardShape;
    const req = new XMLHttpRequest();
    let mutated
    req.responseType = 'json';
    req.open('GET', 'https://deck-indol.vercel.app/api?type=card');
    req.onload = () => {

        // console.log(req.response );  
        cardNumber = req.response.split(',')[0];
        cardShape = req.response.split(',')[1];
        // console.log('cardNumber', cardNumber)
        document.getElementById('test1').innerHTML = ` ${cardNumber} of ${cardShape}`

    };

    return req.send();
}

getCards()

    // APPEND OBJECT KEY & VALUE    
function crypto() {
    let cryptoPrices;
    const req2 = new XMLHttpRequest();
    req2.responseType = 'json';
    req2.open('GET', 'http://api.coinlayer.com/api/live?access_key=3bbd821cbfd7220c9f84cea22922ca39');
    req2.onload = () => {
        console.log(req2.response);

        for (let rate in req2.response.rates) {
            let p = document.createElement('p');
            p.innerHTML = ` ${rate}: ${req2.response.rates[rate]}`
            document.getElementById('test2').appendChild(p)
        }

    };

    return req2.send();
}

crypto()


let objectResponse = [
    {
        id: 'four', name: "spades",
    },
    {
        id: 'eight', name: "hearts",
    },
    {
        id: 'ace', name: "clubs",
    },
    {
        id: 'eight', name: "clubs",
    },
    {
        id: 'ace', name: "diamonds",
    }
];  


    // ARRAY OF OBJECTS
function loopThrough(objectResponse) {

    objectResponse.map(obj => {
        Object.keys(obj).forEach(key => {
            let p = document.createElement('p');
            p.innerHTML = `${key}, ${obj[key]}`
            document.getElementById('test3').appendChild(p)
        })
    })
}

loopThrough(objectResponse)