import axios from 'axios';

const fetchData = async endpoint => {
  try {
    const req = axios.get(endpoint);
    return await req;
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
