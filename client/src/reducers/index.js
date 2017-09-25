import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import billsReducer from './billsReducer';
import spendingsReducer from './spendingsReducer';
import savingsIncomeReducer from './savingsIncomeReducer';

export default combineReducers({
  auth: authReducer,
  bills: billsReducer,
  spendings: spendingsReducer,
  form: formReducer,
  savingIncome: savingsIncomeReducer
});
