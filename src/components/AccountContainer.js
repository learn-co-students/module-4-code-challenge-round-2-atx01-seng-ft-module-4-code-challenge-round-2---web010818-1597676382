import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      transactions: [],
    }
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(resp => resp.json())
    .then(json => this.setState({ transactions: json }))
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    const transSearch = this.state.transactions.filter(transaction => (
      transaction.description.toLocaleLowerCase().includes(this.state.searchTerm.toLowerCase())
      || 
      transaction.category.toLocaleLowerCase().includes(this.state.searchTerm.toLowerCase())
    ))
    return (
      <div>
        <Search searchTerm={this.handleChange} />
        <TransactionsList transactions={transSearch} />
      </div>
    )
  }
}

export default AccountContainer
