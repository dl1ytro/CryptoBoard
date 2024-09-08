// Массив с данными по криптовалютам (ID и названия)
const cryptoList = [
    { id: "bitcoin", name: "BTC" },
    { id: "ethereum", name: "ETH" },
    { id: "tether", name: "USDT" },
    { id: "binancecoin", name: "BNB" },
    { id: "solana", name: "SOL" },
    { id: "usd-coin", name: "USDC" },
    { id: "ripple", name: "XRP" },
    { id: "staked-ether", name: "STETH" },
    { id: "the-open-network", name: "TON" },
    { id: "dogecoin", name: "DOGE" },
    { id: "cardano", name: "ADA" },
    { id: "tron", name: "TRX" },
    { id: "wrapped-bitcoin", name: "WBTC" },
    { id: "avalanche-2", name: "AVAX" },
    { id: "shiba-inu", name: "SHIB" },
    { id: "bitcoin-cash", name: "BCH" },
    { id: "polkadot", name: "DOT" },
    { id: "chainlink", name: "LINK" },
    { id: "leo-token", name: "LEO" },
    { id: "dai", name: "DAI" },
    { id: "uniswap", name: "UNI" },
    { id: "litecoin", name: "LTC" },
    { id: "near", name: "NEAR" },
    { id: "weth", name: "WEETH" },
    { id: "kaspa", name: "KAS" },
    { id: "matic-network", name: "MATIC" },
    { id: "pepe", name: "PEPE" },
    { id: "internet-computer", name: "ICP" },
    { id: "ethena", name: "USDE" },
    { id: "stellar", name: "XLM" },
    { id: "aptos", name: "APT" },
    { id: "ethereum-classic", name: "ETC" },
    { id: "monero", name: "XMR" },
    { id: "crypto-com-chain", name: "CRO" },
    { id: "sui", name: "SUI" },
    { id: "okb", name: "OKB" },
    { id: "fetch-ai", name: "FET" },
    { id: "filecoin", name: "FIL" },
    { id: "blockstack", name: "STX" },
    { id: "bittensor", name: "TAO" },
    { id: "mantle", name: "MNT" },
    { id: "cosmos", name: "ATOM" },
    { id: "hedera-hashgraph", name: "HBAR" },
    { id: "first-digital-usd", name: "FDUSD" },
    { id: "arbitrum", name: "ARB" },
    { id: "vechain", name: "VET" },
    { id: "maker", name: "MKR" },
    { id: "render-token", name: "RENDER" },
    { id: "injective-protocol", name: "INJ" },
    { id: "immutable-x", name: "IMX" },
    { id: "dogwifcoin", name: "WIF" },
    { id: "optimism", name: "OP" },
    { id: "whitebit", name: "WBT" },
    { id: "rocket-pool-eth", name: "RETH" },
    { id: "aave", name: "AAVE" },
    { id: "the-graph", name: "GRT" },
    { id: "bonk", name: "BONK" },
    { id: "arweave", name: "AR" },
    { id: "bitget-token", name: "BGB" },
    { id: "mantle-staked-ether", name: "METH" },
    { id: "renzo-restaked-eth", name: "EZETH" },
    { id: "floki", name: "FLOKI" },
    { id: "notcoin", name: "NOT" },
    { id: "theta-token", name: "THETA" },
    { id: "jupiter", name: "JUP" },
    { id: "celestia", name: "TIA" },
    { id: "ondo-finance", name: "ONDO" },
    { id: "thorchain", name: "RUNE" },
    { id: "pyth-network", name: "PYTH" },
    { id: "helium", name: "HNT" },
    { id: "jasmycoin", name: "JASMY" },
    { id: "algorand", name: "ALGO" },
    { id: "quant-network", name: "QNT" },
    { id: "fantom", name: "FTM" },
    { id: "lido-dao", name: "LDO" },
    { id: "gatechain-token", name: "GT" },
    { id: "brett", name: "BRETT" },
    { id: "core", name: "CORE" },
    { id: "wrapped-eeth", name: "EETH" },
    { id: "sei-network", name: "SEI" },
    { id: "mantra-dao", name: "OM" },
    { id: "flow", name: "FLOW" },
    { id: "bitcoin-cash-sv", name: "BSV" },
    { id: "fasttoken", name: "FTN" },
    { id: "kucoin-shares", name: "KCS" },
    { id: "msol", name: "MSOL" },
    { id: "elrond-erd-2", name: "EGLD" },
    { id: "usdd", name: "USDD" },
    { id: "bittorrent", name: "BTT" },
    { id: "eos", name: "EOS" },
    { id: "flare-networks", name: "FLR" },
    { id: "paypal-usd", name: "PYUSD" },
    { id: "axie-infinity", name: "AXS" },
    { id: "beam", name: "BEAM" },
    { id: "neo", name: "NEO" },
    { id: "tokenize-xchange", name: "TKX" },
    { id: "tezos", name: "XTZ" },
    { id: "kelp-dao-restaked-eth", name: "RSETH" },
    { id: "akash-network", name: "AKT" },
    { id: "frax", name: "FRAX" }
];

// Функция для получения данных о ценах криптовалют с CoinGecko API
async function fetchCryptoData() {
    try {
        const ids = cryptoList.map(crypto => crypto.id).join(',');
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`);
        
        // Проверяем, успешно ли выполнен запрос
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const data = await response.json();

        // Обновляем ячейки сразу после получения данных
        cryptoList.forEach((crypto, index) => {
            const cellId = `cell-${index + 1}`;
            const cell = document.getElementById(cellId);
            if (cell) {
                const price = data[crypto.id]?.usd;
                let formattedPrice;

                if (price !== undefined) {
                    if (price !== undefined) {
                        const integerPartLength = Math.floor(price).toString().length; // Длина целой части
                    
                        if (price >= 10000) {
                            formattedPrice = price.toFixed(1); // 5-значное или большее число с одним знаком после запятой
                        } else if (price < 1) {
                            const decimalPlaces = Math.max(5, 6 - integerPartLength);
                            formattedPrice = price.toFixed(decimalPlaces); // Число меньше единицы
                        } else {
                            const decimalPlaces = Math.max(0, 6 - integerPartLength); // Длина дробной части так, чтобы общее количество цифр было 6
                            formattedPrice = price.toFixed(decimalPlaces);
                        }
                    } else {
                        formattedPrice = 'N/A'; // Если цена не определена
                    }
                } else {
                    formattedPrice = 'N/A'; // Если цена не определена
                }

                cell.innerHTML = `
                    <div>${crypto.name}</div>
                    <div class="price">${formattedPrice}</div>
                `;
            }
        });
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}


// Функция для создания сетки таблицы с криптовалютами
function createGrid() {
    const gridTable = document.getElementById('grid-table');
    cryptoList.forEach((crypto, index) => {
        const cell = document.createElement('td');
        cell.id = `cell-${index + 1}`;
        cell.textContent = 'Loading...';
        gridTable.appendChild(cell);
    });
}

// Инициализация таблицы и загрузка данных о криптовалютах
createGrid();
fetchCryptoData();

// Проверка, вызывается ли функция повторно
setInterval(() => {
    console.log('Fetching new crypto data...');
    fetchCryptoData();
}, 60000);