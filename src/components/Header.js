import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, total = 0 } = this.props;
    return (
      <header>
        <h1>TrybeWallet</h1>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ total }</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => (
  {
    email: state.user.email,
    total: state.user.total,
  }
);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
