import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'bootstrap-icons/font/bootstrap-icons.css';

class TableExpenses extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {
              Object.keys(expenses).map((expense) => {
                const {
                  id,
                  description,
                  price,
                  method,
                  tag,
                  // exchangeRates,
                } = expenses[expense];

                return (
                  <tr key={ id }>
                    <td>{ description }</td>
                    <td>{ tag }</td>
                    <td>{ method }</td>
                    <td>{ price }</td>
                    <td>{ description }</td>
                    <td>{ description }</td>
                    <td>{ description }</td>
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
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

TableExpenses.propTypes = {
  price: PropTypes.integer,
  description: PropTypes.string,
  currency: PropTypes.string,
  method: PropTypes.string,
  tag: PropTypes.string,
  exchangeRates: PropTypes.object,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(TableExpenses);
