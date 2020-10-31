import { createStore, applyMiddleware, compose} from 'redux'
import allReducer from './reducer'
import thunk from 'redux-thunk'




 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(allReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)));
// //const store = createStore(rootReducer, applyMiddleware(thunk),   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

 export default store