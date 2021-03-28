import { Provider } from 'react-redux'
import Catalog from 'components/Catalog'
import store from './store'
import Cart from 'components/Cart'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  )
}

export default App
