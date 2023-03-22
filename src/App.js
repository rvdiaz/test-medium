import logo from './logo.svg';
import './App.css';
import { MainApp } from './Pages/MainApp/MainApp';
import {Provider} from 'react-redux';
import store from './Store/Store';

function App() {
  return (
  <Provider store={store}>
    <MainApp/>
  </Provider>
  );
}

export default App;
