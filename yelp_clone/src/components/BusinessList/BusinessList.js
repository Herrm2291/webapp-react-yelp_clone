import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

/* <BusinessList /> component to simulate what a returned list of businesses will look like in the app (after querying the Yelp API functionality is added). To help this simualtion, <BusinessList /> will make use of the <Business /> component (imported above on line 3) repeatedly below though only the same business will be displayed 6 times */
class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
      </div>
    );
  }
}

export default BusinessList;

