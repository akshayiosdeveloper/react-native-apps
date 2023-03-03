import { useEffect,useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    async function searchApi(searchKeyword) {
      console.log("===> Calling search api =======>")
      try {
        const response = await yelp.get('/search',{
          params: {
            location: 'san jose',
            term: searchKeyword,
            limit:50
          }
        })
        .then(function (response) {
          //console.log(response.data.businesses);
          setResults(response.data.businesses);
        })
        .catch(function (error) {
          //console.log(error);
          setErrorMessage("Some thing went wrong!!")
        })
        .finally(function () {
         // console.log("Always executed!!")
        });
        
      } catch (error) {
        console.error(error);
        
      }
    }
  //searchApi('pasta');
   useEffect(() => {
     searchApi('pasta');
   },[]); 
   return [searchApi,results,errorMessage]; 
};