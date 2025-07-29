
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HomePage from '@/pages/HomePage';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <Helmet>
        <title>WORLDVIBES - Premium T-Shirt Brand | Kaos Berkualitas Tinggi</title>
        <meta name="description" content="Temukan koleksi kaos premium WORLDVIBES dengan desain unik dan kualitas terbaik. Fitur AR try-on dan custom design tersedia." />
      </Helmet>
      <div className="min-h-screen bg-black text-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-70"></div>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
