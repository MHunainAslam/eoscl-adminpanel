
import { combineReducers, createStore } from 'redux';
import authReducer from './Authreducer';

const reduxstore = combineReducers({
  auth: authReducer,
  // Add other reducers as needed
});
const store = createStore(reduxstore);

export default reduxstore;