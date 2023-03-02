import axios from "axios";


// curl --request GET \
//      --url 'https://api.yelp.com/v3/businesses/search?location=san%20jose&sort_by=best_match&limit=20' \
//      --header 'Authorization: Bearer GQoB9tZHI95hQiVL_hX4h-wDRDyr9VQmfjxoZTAmUdBY5dJ8xPdiEcV7QaFi92K7n0ZfWqCos5t4BVqlkwLRcuhckY_Wv5adMM-jRlHwdZrsbqSOJtRU7XzY6kf8Y3Yx' \
//      --header 'accept: application/json'


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer GQoB9tZHI95hQiVL_hX4h-wDRDyr9VQmfjxoZTAmUdBY5dJ8xPdiEcV7QaFi92K7n0ZfWqCos5t4BVqlkwLRcuhckY_Wv5adMM-jRlHwdZrsbqSOJtRU7XzY6kf8Y3Yx'
    }
});

  
  /*const searchApi = async () => {
    try {
   const response = await yelp.get('/search', {
    params: {
      location: 'san jose',
      term: 'pasta',
      limit:50
    }
    
   });
  setResults(response.data.businesses)
  //console.log(response.data);
    } 
    catch (err) {
     console.log(err)
    }
  };
  */