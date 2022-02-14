import './App.scss';
import {Container} from 'react-bootstrap'
import NavigationBar from './components/NavigationBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopFeed from './Pages/ShopFeed';
import About from './Pages/About';
import Profile from './Pages/Profile';
import NotFound from './Pages/NotFound';


function App() {
  return (
    <Container className="App" fluid>    
      <BrowserRouter >
      <NavigationBar/>
      <div className='navcover'></div>



    <Routes>
    <Route path='/' element={<ShopFeed/>} exact/>
    <Route path='/profile' element={<Profile/>} exact/>
    <Route path='/about' element={<About/>} exact/>



    <Route path="*" element={<NotFound/>} exact/>




    </Routes>
    </BrowserRouter>

    </Container>
  );
}

export default App;
