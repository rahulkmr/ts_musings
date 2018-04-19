"use strict";
function buildName(firstName, lastName) {
    return lastName ? firstName + " " + lastName : firstName;
}
var deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    },
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card " + pickedCard.card + " of " + pickedCard.suit);
var suits = ['hearts', 'spades', 'clubs', 'diamonds'];
function pickCard(x) {
    var pickedCard;
    switch (typeof x) {
        case 'object':
            return Math.floor(Math.random() * x.length);
        case 'number':
            var pickedSuit = Math.floor(x / 13);
            return { suit: suits[pickedSuit], card: x % 13 };
    }
}
//# sourceMappingURL=functions.js.map