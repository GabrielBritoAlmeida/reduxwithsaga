import { createStore, applyMiddleware } from 'redux'
import { ICartState } from './modules/cart/types'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './modules/rootReducer'

export interface IState {
  cart: ICartState
}

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

// sagaMiddleware.run()

export default store
