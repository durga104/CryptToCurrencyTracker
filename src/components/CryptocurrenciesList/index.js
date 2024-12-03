// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, cryptoData: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const statusCode = await response.statusCode
    console.log(statusCode)
    const data = await response.json()

    const formattedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({cryptoData: formattedData, isLoading: false})
    console.log(formattedData)
  }

  render() {
    const {cryptoData, isLoading} = this.state
    console.log(isLoading)

    return (
      <div className="list-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cryptocurrency-img"
        />
        <ul className="cryptoCurrenciesList-container">
          <li className="li-container-heading">
            <div className="logo-name-container">
              <h1 className="title">Coin</h1>
              <h1 className="title">Type</h1>
            </div>
            <div className="usd-euro-container">
              <h1 className="title">USD</h1>
              <h1 className="title">EURO</h1>
            </div>
          </li>
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="Rings" color="#ffffff" height={80} width={80} />
            </div>
          ) : (
            cryptoData.map(item => (
              <CryptocurrencyItem cryptoData={item} key={item.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default CryptocurrenciesList
