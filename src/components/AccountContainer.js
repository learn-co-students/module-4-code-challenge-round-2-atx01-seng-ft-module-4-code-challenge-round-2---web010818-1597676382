import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
// import { transactions } from "../transactionsData";

class AccountContainer extends Component {
  state = {
    transactions: [],
    search: "",
  };

  // get a default state working with the data imported from TransactionsData
  // use this to get the functionality working
  // then replace the default transactions with a call to the API

  componentDidMount() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then((res) => res.json())
      .then((transactions) => this.setState({ transactions }));
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList
          search={this.state.search}
          transactions={this.state.transactions}
        />
      </div>
    );
  }
}

export default AccountContainer;
