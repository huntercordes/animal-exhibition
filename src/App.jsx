import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import DigitalJournal from './pages/DigitalJournalPage';

function App() {
   return (
    <Router basename="/animal-exhibition">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/journal" element={<DigitalJournal />} />
      </Routes>
    </Router>
  );
}

export default App;

