import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableItem extends Component {
  constructor(props) {
    super(props);

    this.getExchange = this.getExchange.bind(this);
    this.getCurrency = this.getCurrency.bind(this);
  }

  getExchange() {
    const { exchangeRates, currency } = this.props;
    return Number.parseFloat(
      exchangeRates[currency].ask,
    ).toFixed(2);
  }

  getCurrency() {
    const { exchangeRates, currency } = this.props;
    return exchangeRates[currency].name.split('/');
  }

  convertedValue = () => {
    const { value, exchangeRates, currency } = this.props;
    const exchange = exchangeRates[currency].ask;
    const convertedValue = value * exchange;

    return convertedValue.toFixed(2);
  }

  render() {
    const { value, description, method, tag } = this.props;
    return (
      <tr>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ value }</td>
        <td>{ this.getCurrency() }</td>
        <td>{ this.getExchange() }</td>
        <td>{ this.convertedValue() }</td>
        <td>Real</td>
        <td>
          <button
            type="button"
            data-testid="edit-btn"
          >
            <i className="bi bi-pencil-square" />
          </button>
          <button
            type="button"
            data-testid="delete-btn"
          >
            <i className="bi bi-trash" />
          </button>
        </td>
      </tr>
    );
  }
}

TableItem.propTypes = {
  value: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  exchangeRates: PropTypes.string.isRequired,
};

export default TableItem;
