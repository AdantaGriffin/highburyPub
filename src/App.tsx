import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Root from './components/Root/root';
import Home from './components/Home/home';
import Visit from './pages/visit/visit';
import Reservations from './pages/reservations/reservations';
import Menu from './pages/menu/menu';
import About from './pages/about/about';
import Events from './pages/events/events';
import Order from './pages/order/order';
import Contact from './pages/contact/contact';
import Drinks from './pages/menu/drinks/drinks';
import Food from './pages/menu/food/food';

const AppRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    <Route index element={<Home/>}/>
    <Route path="/visit" element={<Visit/>}/>
    <Route path="/reservations" element={<Reservations/>}/>
    <Route path="/menu" element={<Menu/>}/>
    <Route path="/menu:food" element={<Food/>}/>
    <Route path="/menu:drinks" element={<Drinks/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/events" element={<Events/>}/>
    <Route path="/order" element={<Order/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Route>
))
function App() {

  return (
    <>
    <RouterProvider router={AppRouter}/>
    </>
  )
}

export default App

