import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
	ApolloClient,
	InMemoryCache,
	HttpLink,
	ApolloProvider,
} from '@apollo/client';
import AppLayout from './screens/Layout';
import StoreFront from './screens/StoreFront';
import OrderPage from './screens/Order';
import OrderHistoryPage from './screens/OrderHistory';

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: new HttpLink({ uri: 'http://localhost:4000' }),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<AppLayout>
					<Switch>
						<Route path="/" exact>
							<StoreFront />
						</Route>
						<Route path="/order">
							<OrderPage />
						</Route>
						<Route path="/orderHistory">
							<OrderHistoryPage />
						</Route>
					</Switch>
				</AppLayout>
			</Router>
		</ApolloProvider>
	);
}

export default App;
