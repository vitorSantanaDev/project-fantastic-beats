export default function initFetchBitcoin() {}

const bitcoin = document.querySelector('.btc-preco')

async function fetchBitcoin() {
  try {
    const response = await fetch('https://blockchain.info/ticker')
    const json = await response.json()
    bitcoin.innerText = (1000 / json.BRL.sell).toFixed(4)
  } catch(error) {
    console.log(Error(error))
  }
  
}

fetchBitcoin()