import React from 'react';
import { connect } from 'react-redux';
import { userExpenses } from '../actions';
import Header from '../components/Header';
// import currencyApi from '../services/currencyApi';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: [],
      currencies: [],
      price: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.getCurrencyApi = this.getCurrencyApi.bind(this);
  }

  // async componentDidMount() {
  // this.getCurrencyApi();
  // const { currencies } = this.state;
  // console.log(currencies);
  // }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  // async getCurrencyApi() {
  //   const result = await currencyApi();
  //   const data = await result.code;
  //   this.setState({
  //     currencies: [...data],
  //   });
  // }

  handleSubmit() {}

  render() {
    const { price, description, currency, method, tag } = this.state;
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
            onChange={ this.handleChange }
          >
            <option value="">Escolha uma moeda</option>
            <option value="BRL">BRL</option>
          </select>
        </label>

        <label htmlFor="method">
          Método de Pagamento
          {' '}
          <select
            data-testid="method-input"
            name="method"
            id="method"
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

        <button type="submit">Adicionar despesa</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  expensesDispatch: (currencies) => dispatch(userExpenses(currencies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
