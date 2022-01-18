// Coloque aqui suas actions
import currencyApi from '../services/currencyApi';

const USER_LOGIN = 'USER_LOGIN';
const GET_CURRENCIES = 'GET_CURRENCIES';
const USER_ADD_EXPENSES = 'USER_ADD_EXPENSES';

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

// const addExpenses = (data) => ({
//   type: USER_ADD_EXPENSES,
//   data,
// });

const addExpenses = (payload) => async (dispatch) => {
  const currencies = await currencyApi();
  dispatch({
    type: USER_ADD_EXPENSES,
    payload: {
      ...payload,
      exchangeRates: currencies,
    },
  });
};

export {
  USER_LOGIN,
  GET_CURRENCIES,
  USER_ADD_EXPENSES,
  userLogin,
  getCurrencies,
  returnCurrenciesApi,
  addExpenses,
};
