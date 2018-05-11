import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

/* <BusinessList /> component will make use of the <Business /> component (imported above on line 3) repeatedly below by using this.props.businesses.map to iterate through the list and return the business component each time */
class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {
          this.props.businesses.map(business => {
            return <Business business={business} key={business.id} />
          })
        }
      </div>
    );
  }
}

export default BusinessList;

