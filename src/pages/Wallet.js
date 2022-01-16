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
      // id: 0,
      price: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    // this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getApiCurrencies = this.getApiCurrencies.bind(this);
  }

  componentDidMount() {
    this.getApiCurrencies();
  }

  async getApiCurrencies() {
    const { addCurrencies } = this.props;
    await addCurrencies();
    // const result = await addCurrencies();
    // this.setState({ currencies: result });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  // submitForm() {
  //   const { id, price, description, currency, method, tag } = this.state;
  //   const { addExpensesDispatch } = this.props;
  //   addExpensesDispatch(this.state);
  // }

  render() {
    const { price, description, currency, method, tag } = this.state;
    const { currencies, addExpensesDispatch } = this.props;
    // console.log(currencies);
    return (
      <div>
        <Header />

        <label htmlFor="price">
          Valor
          {' '}
          <input
            data-testid="value-input"
            name="price"
            id="price"
            value={ price }
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
            <option value="">Escolha um método de pagamento</option>
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
            <option value="">Escolha uma categoria</option>
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
            () => addExpensesDispatch({ price, description, currency, method, tag })
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
