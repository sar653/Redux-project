import logo from './logo.svg';
import './App.css';
import Product from './component/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import{createBrowserRouter,Route,createRoutesFromElements,RouterProvider} from"react-router-dom"
import Rootlayout from './component/Rootlayout';
import Dashboard from './component/Dashboard';
import Cart from './component/Cart';

function App() {


  const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Rootlayout/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route path="/cart" element={<Cart/>}>

      </Route>
    </Route>
  ))


  return (
    <div >
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
