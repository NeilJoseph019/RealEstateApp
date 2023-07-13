import { Route, Routes} from 'react-router-dom'
import HomePage from './pages/homePage/HomePage';
import ToRent from './pages/toRent/ToRent';
import ToBuy from './pages/toBuy/ToBuy';
import AboutPage from './pages/aboutPage/AboutPage';
import ContactUsPage from './pages/contactUsPage/ContactUsPage';

function App() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/to-rent/' element={<ToRent/>} />
        <Route path='/to-buy/' element={<ToBuy/>} />
        <Route path='/about/' element={<AboutPage/>} />
        <Route path='/contact-us/' element={<ContactUsPage/>} />
    </Routes>
  );
}


export default App;
