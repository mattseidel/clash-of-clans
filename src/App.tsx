import { DisplayComponent } from './components/display/displayComponent';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
    <DisplayComponent />
    </Provider>
  );
}

export default App;
