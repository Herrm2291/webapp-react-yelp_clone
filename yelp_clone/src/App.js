import React from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

/* Sample hard-coded single business listing object which will later be dynamically updated using the Yelp API */
const business = {
  imageSrc: 'https://thumbs.gfycat.com/DrearyNimbleIchthyosaurs-size_restricted.gif',
  name: 'Pizza the Hutt',
  address: '1234 Princess Vespa Way',
  city: 'Dark Helmet',
  state: 'OH',
  zipCode: '12345',
  category: 'ITALIAN',
  rating: 5.0,
  reviewCount: 123456
};

/* businesses array to hold six references to the above business object */
const businesses = [
  business,
  business,
  business,
  business,
  business,
  business,
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Yelp...sort of</h1>
          <SearchBar />
          <BusinessList businesses={businesses} />
      </div>
    );
  }
}

export default App;

