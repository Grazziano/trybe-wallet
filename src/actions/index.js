// Coloque aqui suas actions
import currencyApi from '../services/currencyApi';

const USER_LOGIN = 'USER_LOGIN';
const GET_CURRENCIES = 'GET_CURRENCIES';
const USER_EXPENSES = 'USER_EXPENSES';

const userLogin = (email) => ({
  type: USER_LOGIN,
  email,
});

const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  data: currencies,
});

const returnCurrenciesApi = () => (
  async (dispatch) => {
    const result = await currencyApi();
    return dispatch(getCurrencies(result));
  });

const userExpenses = (value) => ({
  type: USER_EXPENSES,
  value,
});

export {
  USER_LOGIN,
  GET_CURRENCIES,
  USER_EXPENSES,
  userLogin,
  getCurrencies,
  returnCurrenciesApi,
  userExpenses,
};
