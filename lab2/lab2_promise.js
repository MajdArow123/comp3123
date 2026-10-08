/*
purpose: Act as an API devloper and create a new Promise to either Reslove or reject
*/
async function fetch_games(){
    let promise_games = new Promise((resolve, reject) => {
        let isRegistered = true
        setTimeout(() => { 
            if (isRegistered) {
                const gamesJSON = {
            monday:"Leafs",
            tuesday:"Raptors",
        }
        // Static method that comes from the json prototype/class
        let gamesJSONstr = JSON.stringify(gamesJSON);
        resolve(gamesJSONstr)
        } else {
            reject("You must be a registured member first ")
        }
    }, 2000)

})
    let result_from_promise = await promise_games;
    console.log(result_from_promise)
const gamesJsonParsed = JSON.parse(result_from_promise)
console.log(gamesJsonParsed.monday)
}
fetch_games()
let sameStrToPrint = "bob"
console.log(sameStrToPrint)