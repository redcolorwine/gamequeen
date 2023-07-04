import { Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Leftbar from './components/LeftBar/Leftbar';
import HomeContainer from './pages/Home/HomeContainer';
import SearchPageContainer from './pages/SearchPage/SearchPageContainer';
import GameAboutContainer from './pages/GameAbout/GameAboutContainer';
import AuthContainer from './pages/auth/AuthcCointainer';
import HeaderContainer from './components/header/headerContainer';
import WishListContainer from './pages/Wishlist/WishlistContainer';
import Last30DaysContainer from './pages/Releases/Last30DaysContainer';

function App() {
  const { query } = useParams();
  const isAuth = false;
  return (
    <div className="App">
      <HeaderContainer />

      <div className="App-wrapper">
        <Leftbar />
        <div className="rightBlock">
          <Routes>
            <Route path='/' element={<HomeContainer />} />
            <Route path='/search/:query' element={<SearchPageContainer />} />
            <Route path='/game/:id' element={<GameAboutContainer />} />
            <Route path='/auth' element={<AuthContainer />} />
            <Route path='/wishlist' element={<WishListContainer />} />
            <Route path='/library' element={<WishListContainer />} />
            <Route path='/last30days' element={<Last30DaysContainer />} />
          </Routes>

        </div>
      </div>
    </div>
  );
}

export default App;
