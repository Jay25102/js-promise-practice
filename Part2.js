/* 
    Part 2: Deck of Cards
*/
let BASE_URL = "https://deckofcardsapi.com/api/deck";

// 1
axios
.get(`${BASE_URL}/new/shuffle/?deck_count=1`)
.then(p1 => {
    let deckID = p1.data.deck_id;
    // console.log(deckID);
    return axios.get(`${BASE_URL}/${deckID}/draw/?count=1`);
})
.then(p2 => {
    console.log(p2.data.cards[0].value + " of " + p2.data.cards[0].suit);
})
.catch(err => console.log(err));

// 2
let deckID;
let bothCards = [];
axios
.get(`${BASE_URL}/new/shuffle/?deck_count=1`)
.then(p1 => {
    deckID = p1.data.deck_id;
    // console.log(deckID);
    return axios.get(`${BASE_URL}/${deckID}/draw/?count=1`);
})
.then(p2 => {
    bothCards.push(p2.data.cards[0].value + " of " + p2.data.cards[0].suit);
    return axios.get(`${BASE_URL}/${deckID}/draw/?count=1`);
})
.then(p3 => {
    bothCards.push(p3.data.cards[0].value + " of " + p3.data.cards[0].suit);
    console.log("Card 1: " + bothCards[0] + "\n");
    console.log("Card 2: " + bothCards[1]);
})
.catch(err => console.log(err));

// 3
let newDeckID;
const btnForm = document.querySelector("#btn-form");
const cardArea = document.querySelector("#card-area");

axios.get(`${BASE_URL}/new/shuffle`)
.then(data => {
    newDeckID = data.data.deck_id;
    console.log(newDeckID);
})
.catch(err => console.log(err));

const btn = document.createElement("button");
btn.type = "submit";
btn.innerText = "GIMME A CARD!";
btnForm.appendChild(btn);

btnForm.addEventListener("submit", function(e) {
    e.preventDefault();

    axios.get(`${BASE_URL}/${newDeckID}/draw/?count=1`)
    .then(data => {
        console.log(data.data.cards[0].value + " of " + data.data.cards[0].suit);
        let newCard = document.createElement("img");
        newCard.setAttribute("src", data.data.cards[0].image);
        cardArea.appendChild(newCard);
    })
    .catch(err => console.log(err));
});