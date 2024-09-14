//Em aula ele usa a createStore, mas ela está depreciada e ele usa o configureStore do redux-toolkit
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';


const store = configureStore({ reducer: rootReducer });
export default store;