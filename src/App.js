import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
