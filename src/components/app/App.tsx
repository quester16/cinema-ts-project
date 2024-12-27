import { Provider } from 'react-redux'
import { store } from '../../redux'
import Router from '../../routes/Router.tsx'

function App() {
	return (
		<Provider store={store}>
			<Router />
		</Provider>
	)
}

export default App
