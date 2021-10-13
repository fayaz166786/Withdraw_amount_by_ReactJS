import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  deductBalance = amt => {
    this.setState(prevState => ({balance: prevState.balance - amt}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-container">
            <p className="logo">S</p>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="bal-container">
            <p className="balance-heading">Your Balance</p>
            <div>
              <p className="balance">{balance}</p>
              <p className="balance-heading size">In Rupees</p>
            </div>
          </div>
          <div>
            <p className="balance withdraw">Withdraw</p>
            <p className="balance-heading">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="ul-container">
            {denominationsList.map(each => (
              <DenominationItem
                amount={each}
                key={each.id}
                func={this.deductBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
