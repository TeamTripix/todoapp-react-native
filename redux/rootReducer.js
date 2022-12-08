import { combineReducers } from "redux";
import addTodoReducer from "./sendDataToTodoArray/reducer";
import handleToggleButtonDailogReducer from "./handleToggleButtonDailog/reducer";
import inputReducer from "./setInputData/reducer"


const rootReducer = combineReducers({
  addTodoReducer,
  handleToggleButtonDailogReducer,
  inputReducer,
});

export default rootReducer;

// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'

// const rootReducer = combineReducers({
//     addProduct: addProductReducer,
//     searchValue: searchValueReducer,
// })

// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: [
//         'addProduct',
//         'searchValue'
//     ]
// }

// export default persistReducer(persistConfig, rootReducer)
