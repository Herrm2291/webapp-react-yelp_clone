import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

/* <BusinessList /> component to simulate what a returned list of businesses will look like in the app (after querying the Yelp API functionality is added). To help this simualtion, <BusinessList /> will make use of the <Business /> component (imported above on line 3) repeatedly below by using this.props.businesses.map to iterate through the list and return the business component each time */
class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList"> {
        this.props.businesses.map(business => {
          return <Business business={business} />
        }
        )};
      </div>
    );
  }
}

export default BusinessList;

