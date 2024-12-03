// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoData} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoData

  return (
    <li className="li-container">
      <div className="logo-name-container">
        <img src={currencyLogo} className="currency-logo" alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-euro-container">
        <p className="usd-Value">{usdValue}</p>
        <p className="euro-Value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
