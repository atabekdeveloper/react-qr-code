import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { QrCodeGenerator } from './components/Generate/QrCodeGenerator';
import { QrCodeScanner } from './components/Scan/QrCodeScanner';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/qr-code/generate" element={<QrCodeGenerator />} />
        <Route path="/qr-code/scan" element={<QrCodeScanner />} />
      </Routes>
    </>
  );
};

export default App;
