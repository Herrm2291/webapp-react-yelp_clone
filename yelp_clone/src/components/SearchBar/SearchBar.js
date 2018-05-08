import React from 'react';
import './SearchBar.css';

/* values are from the /business/search endpoint 'sort-by' parameters as outlined by Yelp's search API documentation:  https://www.yelp.com/developers/documentation/v3/business_search */
const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}

/* the <SearchBar /> component below is part of the structure needed to communicate with the Yelp API (which will be implemented later) */
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '', /* refers to the search term located in the search input */
      location: '', /* refers to the location to search near from the location input */
      sortBy: 'best_match' /* represents the selected sorting option to use */
    };
  }

  /* returns the current CSS class of sort options, returning whether or not each one should be styled as if it has been selected */
  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    } else {
      return '';
    }
  }

  /* sets the state of a sorting option */
  handleSortByChange(sortByOption) {
    this.setState({sortBy: sortByOption});
  }

  /* sets the state of a term(businesses) option */
  handleTermChange(e) {
    this.setState({});
  }

  /* sets the state of a location(location to search in) option */
  handleLocationChange(e) {
    this.setState({});
  }

  /* renderSortByOptions is used to dynamically create the list items needed to display the sort options */
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
      {sortByOption}</li>;
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

