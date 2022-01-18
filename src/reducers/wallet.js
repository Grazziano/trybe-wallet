import { GET_CURRENCIES, USER_ADD_EXPENSES } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

// const lastId = (array) => array.reduce((acc, cur) => Math.max(acc, cur.id), 0);

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_ADD_EXPENSES:
    // return {
    //   ...state,
    //   expenses: [
    //     ...state.expenses,
    //     {
    //       id: state.expenses.length > 0 ? lastId([...state.expenses]) + 1 : 0,
    //       ...action.data,
    //     },
    //   ],
    // };
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case GET_CURRENCIES:
    return { ...state, currencies: action.data };
  default:
    return state;
  }
};

export default wallet;
