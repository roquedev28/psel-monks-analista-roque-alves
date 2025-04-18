import React from 'react';
import './App.css';
import Header from './components/Header';
import CardSection from './components/CardSection';
import ImageGrid from './components/ImageGrid';
import CategoryTags from './components/CategoryTags';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <CardSection />
      <ImageGrid />
      <div className="promo-banner">
        <h2>Lorem ipsum dolor sit amet consectetur</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing...</p>
        <div className="buttons">
          <img src="https://via.placeholder.com/120x40?text=App+Store" alt="App Store" />
          <img src="https://via.placeholder.com/120x40?text=Google+Play" alt="Google Play" />
        </div>
      </div>
      <CategoryTags />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
