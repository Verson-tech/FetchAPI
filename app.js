fetch('https://api.crptonator.com/api/full/btc-usd')
.then(res =>{
    console.log('RESPONSE, WAITING TO PARSE!!!', res)
    return res.json()
})
.then(data => {
    console.log("DATA Parsed...")
    console.log(data.ticker.price)
})
.catch(e =>{
    console.log('Oh, no! Error!', e)
})

// OR

// const fetchBitcoinPrice = async () => {
//     try{
//         const res = await fetch('https://api.cryptonator.com/api/full/btc-usd')
//         const data = await res.json();
//         console.log(data.ticker.price)
//     }catch(e){
//         console.log('Oh, no! Error!', e)
//     }
// }