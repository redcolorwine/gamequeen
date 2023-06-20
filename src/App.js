import { Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Leftbar from './components/LeftBar/Leftbar';
import Header from './components/header/header';
import HomeContainer from './pages/Home/HomeContainer';
import SearchPageContainer from './pages/SearchPage/SearchPageContainer';

function App() {
  const { query } = useParams();
  return (
    <div className="App">
      <Header />
      <div className="App-wrapper">
        <Leftbar />
        <div className="rightBlock">
          <Routes>
            <Route path='/' element={<HomeContainer />} />
            <Route path='/search/:query' element={<SearchPageContainer />} />
          </Routes>

        </div>
      </div>
    </div>
  );
}

export default App;
