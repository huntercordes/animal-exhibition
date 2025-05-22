import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import DigitalJournal from './pages/DigitalJournalPage';
import MobileAppmain from './pages/MobileAppmain';


function App() {
   return (
    <Router basename="/animal-exhibition">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/journal" element={<DigitalJournal />} />
        <Route path="/mobile" element={<MobileAppmain />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

