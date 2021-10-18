import { BrowserRouter,Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import { Home } from './Components/Pages/Home';
import { Cart } from './Components/Pages/Cart';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div>
       <Route exact path="/">
          <Home/>
       </Route>
        <Route exact path="/cart">
          <Cart/>
       </Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
