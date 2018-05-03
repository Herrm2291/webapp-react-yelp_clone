import React from 'react';
import './Business.css';

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

/* <Business /> component which references the above sample 'business' object to represent formatting and style of a business (restaurant) within the app */
class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img src={business.imageSrc} alt='Pizza the Hutt from the movie Spaceballs' />
        </div>
        <h2>{business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{business.state} {business.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{business.category}</h3>
            <h3 className="rating">{business.rating} stars</h3>
            <p>{business.reviewCount} Reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;

