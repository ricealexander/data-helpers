import { has, not, by, to } from './lib'

console.log({ has, not, by, to })

const cashBackCards = [
  {
    name: 'Bank of America® Cash Rewards credit card',
    bank: 'Bank of America®',
    rating: 4.4,
  },
  {
    name: 'Capital One® Quicksilver® Cash Rewards Credit Card',
    bank: 'Capital One®',
    rating: 3.7,
  },
  {
    name: 'Capital One® Savor® Cash Rewards Credit Card',
    bank: 'Capital One®',
    rating: 3.7,
  },
  {
    name: 'Chase Freedom Unlimited®',
    bank: 'Chase',
    rating: 3.7,
  },
  {
    name: 'Discover it® Cash Back',
    bank: 'Discover®',
    rating: 3.7,
  },
  {
    name: 'Chase Freedom®',
    bank: 'Chase',
    rating: 3.8,
  },
  {
    name: 'Citi® Double Cash Card',
    bank: 'Citibank',
    rating: 5.0,
  },
  {
    name: 'Blue Cash Preferred® Card from American Express',
    bank: 'American Express',
    rating: 3.8,
  },
  {
    name: 'U.S. Bank Cash+™ Visa Signature® Card',
    bank: 'U.S. Bank',
    rating: 4.0,
  },
]

console.log(cashBackCards.sort(by('>rating', 'name')))
