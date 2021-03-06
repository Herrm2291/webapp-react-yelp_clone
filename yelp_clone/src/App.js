import React from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp';

// /* Sample hard-coded single business listing object which will later be dynamically updated using the Yelp API */
// const business = {
//   imageSrc: 'https://thumbs.gfycat.com/DrearyNimbleIchthyosaurs-size_restricted.gif',
//   name: 'Pizza the Hutt',
//   address: '1234 Princess Vespa Way',
//   city: 'Dark Helmet',
//   state: 'OH',
//   zipCode: '12345',
//   category: 'ITALIAN',
//   rating: 5.0,
//   reviewCount: 123456
// };
//
// /* businesses array to hold six references to the above business object */
// const businesses = [
//   business,
//   business,
//   business,
//   business,
//   business,
//   business,
// ];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }
  
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({businesses: businesses})
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Yelp...sort of</h1>
          <SearchBar searchYelp={this.searchYelp}/>
          <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;

