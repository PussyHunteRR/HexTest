import Form from './Components/Form/Form';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import PizzaContainer from './Components/Pizza/PizzaContainer';
import SandwichContainer from './Components/Sandwich/SandwichContainer';
import SoupContainer from './Components/Soup/SoupContainer';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Form/>
      <Navbar/>
      <Routes>
      <Route path='/pizza' element={<PizzaContainer/>} />
      <Route path='/soup' element={<SoupContainer/>} />
      <Route path='/sandwich' element={<SandwichContainer/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
