import axios from 'axios';

const getDataFromAPI = ( url ) => {

  try {
    return axios(url);
  }
  catch(error) {
    console.log(error)
  }
}

export default getDataFromAPI;