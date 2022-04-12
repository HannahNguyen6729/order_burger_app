import { combineReducers } from "redux";
import burgerReducer from './OrderBurgerReducer';
const rootReducers= combineReducers({
    burgerReducer
});
export default rootReducers;