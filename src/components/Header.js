import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  sumExpenses = () => {
    const { expensesFormObject } = this.props;
    const total = expensesFormObject.reduce((acc, cur) => acc
    + (cur.value * cur.exchangeRates[cur.currency].ask), 0);
    return total;
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <h1>TrybeWallet</h1>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ this.sumExpenses().toFixed(2) }</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => (
  {
    email: state.user.email,
    expensesFormObject: state.wallet.expenses,
  }
);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expensesFormObject: PropTypes.arrayOf(PropTypes.shape([])).isRequired,
};

export default connect(mapStateToProps)(Header);
