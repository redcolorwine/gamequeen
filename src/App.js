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
import ThisWeekContainer from './pages/Releases/ThisWeekContainer';
import NextWeekContainer from './pages/Releases/NextWeekContainer';
import BestYearContainer from './pages/Tops/BestYearContainer';
import PopularCurrentContainer from './pages/Tops/PopularCurrentContainer';
import Top250Container from './pages/Tops/Top250Container';
import LeftbarContainer from './components/LeftBar/LeftbarContainer';
import Footer from './components/footer/footer';

function App() {
  const { query } = useParams();
  const isAuth = false;
  return (
    <div className="App">
      <HeaderContainer />

      <div className="App-wrapper">
        <LeftbarContainer />
        <div className="rightBlock">
          <Routes>
            <Route path='/' element={<HomeContainer />} />
            <Route path='/search/:query' element={<SearchPageContainer />} />
            <Route path='/game/:id' element={<GameAboutContainer />} />
            <Route path='/auth' element={<AuthContainer />} />
            <Route path='/wishlist' element={<WishListContainer />} />
            <Route path='/library' element={<WishListContainer />} />
            <Route path='/last30days' element={<Last30DaysContainer />} />
            <Route path='/thisweek' element={<ThisWeekContainer />} />
            <Route path='/nextweek' element={<NextWeekContainer />} />
            <Route path='/bestyear' element={<BestYearContainer />} />
            <Route path='/popularcurrent' element={<PopularCurrentContainer />} />
            <Route path='/top250' element={<Top250Container />} />
          </Routes>

        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
