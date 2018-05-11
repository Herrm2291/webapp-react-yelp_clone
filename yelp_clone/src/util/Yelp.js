const apiKey = 'qXcdWEUReAibH1ke59f53-c4FiZhWhQuaYAgs-KM-59FzVIKDw2cNDn6WfMl8yrjwItDwpMOJbyaG643ZRNnLaHOa7eDixt9x8-mNEEhNIKEsb9lxNtzx5hcX7z0WnYx';

const Yelp = {
/* method to return a promise that will ultimately resolve to the list of businesses */
search(term, location, sortBy) {
  /* CORS (cross-origin resource sharing) bypass - https://cors-anywhere.herokuapp.com/...*/
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
  }).then(response => {
    return response.json();
  }).then(jsonResponse => {
    if (jsonResponse.businesses) {
      return jsonResponse.businesses.map(business => ({
        id: business.id,
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
        category: business.title,
        rating: business.rating,
        reviewCount:business.review_count
      }));
      }
    });
  }
};

export default Yelp;

