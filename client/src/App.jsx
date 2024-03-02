import { Route, Routes } from 'react-router-dom';
import Page404 from './components/404/Page404';
import About from './components/About/About';
import './App.css';
import CountryDetails from './components/CountryDetails/CountryDetails';
import CreateActivity from './components/CreateActivity/CreateActivity';
import Home from './components/Home/Home';
import PlayQuiz from './components/Quiz/PlayQuiz';
import Quiz from './components/Quiz/Quiz';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details/:id" element={<CountryDetails />} />
        <Route path="/create-activities" element={<CreateActivity />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/play" element={<PlayQuiz />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
