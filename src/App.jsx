import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToHash from './components/ScrollToHash';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Platform from './pages/Platform';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import CaseStudies from './pages/CaseStudies';
import About from './pages/About';
import Contact from './pages/Contact';
import Demo from './pages/Demo';
import News from './pages/News';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Impressum from './pages/Impressum';

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/news" element={<News />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/impressum" element={<Impressum />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
