import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { returnCurrenciesApi } from '../actions';
import Header from '../components/Header';
import TableExpenses from '../components/TableExpenses';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      price: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit() {}

  render() {
    const { price, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    console.log(currencies);
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
            <option value="">Escolha uma moeda</option>
            {
              (
                Object.values(currencies)
                  .filter((e) => (e.name !== 'Dólar Americano/Real Brasileiro Turismo'))
                  .map((cur) => (
                    <option
                      key={ cur.code }
                      data-testid={ cur.code }
                      value={ cur.code }
                    >
                      { cur.code }
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

        <button type="submit">Adicionar despesa</button>

        <TableExpenses />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addCurrencies: () => dispatch(returnCurrenciesApi()),
});

Wallet.propTypes = {
  addCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.shape({
    ask: PropTypes.string.isRequired,
    bid: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    codein: PropTypes.string.isRequired,
    create_date: PropTypes.string.isRequired,
    high: PropTypes.string.isRequired,
    low: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pctChange: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    varBid: PropTypes.string.isRequired,
  })).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
