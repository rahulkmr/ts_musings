function buildName(firstName: string, lastName?: string) {
    return lastName ? `${firstName} ${lastName}` : firstName
}

interface Card {
    suit: string
    card: number
}

interface Deck {
    suits: string[]
    cards: number[]
    createCardPicker(this: Deck): () => Card
}

let deck: Deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52)
            let pickedSuit = Math.floor(pickedCard / 13)

            return {suit: this.suits[pickedSuit], card: pickedCard % 13}
        }
    },
}

let cardPicker = deck.createCardPicker()
let pickedCard = cardPicker()

console.log(`card ${pickedCard.card} of ${pickedCard.suit}`)

let suits = ['hearts', 'spades', 'clubs', 'diamonds']

function pickCard(x: {suit: string; card: number}[]): number
function pickCard(x: number): {suit: string; card: number}
function pickCard(x: any): any {
    let pickedCard: number | Card
    switch (typeof x) {
        case 'object':
            return Math.floor(Math.random() * x.length)
        case 'number':
            const pickedSuit = Math.floor(x / 13)
            return {suit: suits[pickedSuit], card: x % 13}
    }
}
