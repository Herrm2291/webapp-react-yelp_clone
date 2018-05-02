import React from 'react';
import './Business.css';

business {
  imageSrc: 'https://pbs.twimg.com/media/CqEl8kKXgAAYBuQ.png',
  name: 'Pizza the Hutt',
  address: '1234 Princess Vespa Way',
  city: 'Dark Helmet',
  state: 'OH',
  zipCode: '12345',
  category: 'Space',
  rating: 4.9,
  reviewCount: 99
};

class Business extends React.Component{
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img src={business.imgSrc} alt='Thin crust pizza with pepperoni, green peppers, onions and mushrooms' />
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
            <h3 className="rating">{business.rating}</h3>
            <p>{business.reviewCount}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;

