import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {
  constructor(){
    super()
    this.state = {
      transactions: [],
      search: ''
    }
  }
  

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(json => this.setState({transactions: json}))
  }

  handleChange = (event) => {
    this.setState({search: event.target.value})
  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList transactions={this.state.transactions} search={this.state.search} />
      </div>
    )
  }
}

export default AccountContainer
