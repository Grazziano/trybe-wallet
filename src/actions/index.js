// Coloque aqui suas actions
import currencyApi from '../services/currencyApi';

const USER_LOGIN = 'USER_LOGIN';
const GET_CURRENCIES = 'GET_CURRENCIES';
const USER_EXPENSES = 'USER_EXPENSES';

const userLogin = (email) => ({
  type: USER_LOGIN,
  email,
});

const getCurrencies = (data) => ({
  type: GET_CURRENCIES,
  currencies: data,
});

const fetchCurrencies = () => {
  const fetch = async (dispatch) => {
    const result = await currencyApi();
    return dispatch(getCurrencies(result));
  };
  return fetch;
};

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
  fetchCurrencies,
  userExpenses,
};
