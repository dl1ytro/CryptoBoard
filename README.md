
# CryptoBoard Website

This website displays real-time cryptocurrency prices for 100 selected crypto pairs and highlights the current active region based on time zones. 
It features market prices across different regions: UTC, Asia, USA, Europe, UAE, Singapore, South America, and South Africa.

# Features

1. **Cryptocurrency Prices**: 
   - The website lists 100 cryptocurrency pairs, each with real-time prices.
   - Prices are regularly updated for accurate tracking across markets.

2. **Market Time Zones**: 
   - Displays the current time for eight major markets:
     - UTC
     - Asia
     - USA
     - Europe
     - UAE
     - Singapore
     - South America
     - South Africa
   - The time for each region is shown in a clearly formatted clock.
   
3. **Active Market Highlighting**:
   - The active region is highlighted to show which market is currently trading.
   - The active region's border is marked in green to emphasize the current activity.

4. **Responsive Design**:
   - The site is fully responsive, adapting to various screen sizes and devices.

## Structure

### Homepage

The homepage features a table with the following elements:

1. **Time Zone Panel**:
   - A row at the top showing the current local time of each major market.
   - The active region (based on the user's current time) is highlighted in green.

2. **Cryptocurrency Table**:
   - The main section of the page contains a grid of 100 cryptocurrency pairs.
   - Each cell displays:
     - The cryptocurrency symbol (e.g., BTC, ETH, ADA).
     - The current price of the cryptocurrency pair in USD.
   - Data is displayed in real time and updates regularly to reflect the latest market prices.

### Data Fetching

The site fetches price data using a crypto price API CoinGecko at regular intervals about every 5 minutes). 
This ensures that the prices displayed are up to date.

### Time Synchronization

The website automatically synchronizes the user's system time with the active market region. 
Based on the user's time, the corresponding region is highlighted to show where the market is active.

### Time Zone Highlighting

By default, the region with the closest local time to the user's time will be highlighted.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
