/* 
    Part 1: Number Facts
*/

let BASE_URL = "http://numbersapi.com";

// 1
let favNumber = 42;
let favNumberPromise = axios.get(`${BASE_URL}/${favNumber}?json`);
favNumberPromise.then(data => console.log(data.data)).catch(err => console.log(err));

// 2
let multiNums = "13,17,27";
let multiNumPromise = axios.get(`${BASE_URL}/${multiNums}?json`)
.then(data => console.log(data.data)).catch(err => console.log(err));

// 3
let multiFav = "42,42,42,42";
let multiFavPromise = axios.get(`${BASE_URL}/${multiFav}?json`)
.then(data => console.log(data.data)).catch(err => console.log(err));
// or we can use promise.all
let fourNumPromises = [];
for (let i = 0; i < 5; i++) {
    fourNumPromises.push(
        axios.get(`${BASE_URL}/${favNumber}?json`)
    );
}
Promise.all(fourNumPromises).then(p => (
    p.forEach(data => console.log(data.data))
))
.catch(err => console.log(err));
