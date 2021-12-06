export default function initFetchBitcoin(url, target) {
  const bitcoin = document.querySelector(target);

  async function fetchBitcoin() {
    try {
      const response = await fetch(url);
      const json = await response.json();
      bitcoin.innerText = (1000 / json.BRL.sell).toFixed(4);
    } catch (error) {
      console.log(Error(error));
    }
  }

  fetchBitcoin();
}
