import { GET_CURRENCIES, USER_EXPENSES } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.expenses] };
  case GET_CURRENCIES:
    return { ...state, currencies: action.data };
  default:
    return state;
  }
};

export default wallet;
