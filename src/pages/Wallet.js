import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpenses, returnCurrenciesApi } from '../actions';
import Header from '../components/Header';
import TableExpenses from '../components/TableExpenses';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentacao',
      exchangeRates: {},
    };

    this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getApiCurrencies = this.getApiCurrencies.bind(this);
  }

  componentDidMount() {
    this.getApiCurrencies();
  }

  async getApiCurrencies() {
    const { addCurrencies } = this.props;
    await addCurrencies();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  submitForm() {
    const { value, description, currency, method, tag, exchangeRates } = this.state;
    const { addExpensesDispatch, expenses } = this.props;

    const obj = {
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };

    addExpensesDispatch(obj);

    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'alimentacao',
    });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;

    return (
      <div>
        <Header />

        <label htmlFor="value">
          Valor
          {' '}
          <input
            data-testid="value-input"
            name="value"
            id="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="description">
          Descrição
          {' '}
          <input
            data-testid="description-input"
            name="description"
            id="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="currency">
          Moeda
          {' '}
          <select
            data-testid="currency-input"
            name="currency"
            id="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            {
              (
                Object.keys(currencies)
                  .filter((e) => (e !== 'USDT'))
                  .map((cur, index) => (
                    <option
                      key={ cur + index }
                      data-testid={ cur }
                      value={ cur }
                    >
                      { cur }
                    </option>
                  ))
              )
            }
          </select>
        </label>

        <label htmlFor="method">
          Método de Pagamento
          {' '}
          <select
            data-testid="method-input"
            name="method"
            id="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Categoria
          {' '}
          <select
            data-testid="tag-input"
            name="tag"
            id="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <button
          type="button"
          onClick={
            this.submitForm
          }
        >
          Adicionar despesa
        </button>

        <TableExpenses />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  addCurrencies: () => dispatch(returnCurrenciesApi()),
  addExpensesDispatch: (data) => dispatch(addExpenses(data)),
});

Wallet.propTypes = {
  addCurrencies: PropTypes.func.isRequired,
  addExpensesDispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.shape([])).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape([])).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
