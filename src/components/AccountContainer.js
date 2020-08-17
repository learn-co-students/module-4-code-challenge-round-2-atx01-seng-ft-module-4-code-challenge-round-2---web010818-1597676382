import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import { transactions } from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      transactions: [],
      searchTerm: ''
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(data => this.setState({
      transactions: data
    }))
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value.toLowerCase() })
  }

  dynamicSearch = () => {
    if (this.state.searchTerm !== '') {
      return this.state.transactions.filter(t => t.description.toLowerCase().includes(this.state.searchTerm) || t.category.toLowerCase().includes(this.state.searchTerm))
    } else {
      return this.state.transactions
    }
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList transactions={this.dynamicSearch()} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default AccountContainer
