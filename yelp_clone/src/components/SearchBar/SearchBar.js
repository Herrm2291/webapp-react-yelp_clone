import React from 'react';
import './SearchBar.css';

/* values are from the /business/search endpoint 'sort-by' parameters as outlined by Yelp's search API documentation:  https://www.yelp.com/developers/documentation/v3/business_search */
const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}

/* The <SearchBar /> component below is part of the structure needed to communicate with the Yelp API (which will be implemented later) */
class SearchBar extends React.Component {
  /* renderSortByOptions is used to dynamically create the list items needed to display the sort options */
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
          {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;

