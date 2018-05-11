import React from 'react';
import './SearchBar.css';

/* values are from the /business/search endpoint 'sort-by' parameters as outlined by Yelp's search API documentation:  https://www.yelp.com/developers/documentation/v3/business_search */
const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}

/* the <SearchBar /> component below is part of the structure needed to communicate with the Yelp API */
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '', /* refers to the search term located in the search input */
      location: '', /* refers to the location to search near from the location input */
      sortBy: 'best_match' /* represents the selected sorting option to use */
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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
  handleSortByChange(sortByOption, event) {
    this.setState({sortBy: sortByOption}),
    this.handleSearch(event);
  }

  /* sets the state of a term(businesses) option */
  handleTermChange(event) {
    this.setState({term: event.target.value});
  }

  /* sets the state of a location(location to search in) option */
  handleLocationChange(event) {
    this.setState({location: event.target.value});
  }

  /* executes the searchYelp method when the "Let's Go" button is clicked */
  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault();
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
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;

