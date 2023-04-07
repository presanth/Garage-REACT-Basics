import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import CarView from './component/CarView';
import { Route,Routes  } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/view-car/:id' element={<CarView></CarView>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
