import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview'
import ManageInventory from './components/ManageInventory/ManageInventory';
import Placeorder from './components/Placeorder/Placeorder';
import Notfound from './components/Notfound/Notfound';
function App() {
  return (
    <div>
      <BrowserRouter>
          <Header></Header>
        <Switch>
          {/* shop */}
          <Route exact path='/' >
            <Shop></Shop>
          </Route>
          {/*also  shop */}
          <Route exact path='/shop' >
            <Shop></Shop>
          </Route>
          {/* order review */}
          <Route path='/orders' >
            <OrderReview></OrderReview>
          </Route>
          {/* manage inventory */}
          <Route path='/inventory' >
            <ManageInventory></ManageInventory>
          </Route>
          {/* place order */}
          <Route path='/placeorder' >
            <Placeorder></Placeorder>
          </Route>
          <Route path='*' >
            <Notfound></Notfound>
          </Route>
        </Switch>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
