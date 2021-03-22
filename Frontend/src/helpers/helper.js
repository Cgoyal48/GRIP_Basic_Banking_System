const axios = require('axios');
const { backend } = require('../backend');


export const loadAllUsers=()=>{
return axios.get(`https://basic-banktsf.herokuapp.com/api/getAllCustomer`)
  .then(function (response) {
    return response
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    return error
    console.log(error);
  })
  }


  export const transferMoney=(amount,reciverId,senderId)=>{
      console.log({amount,reciverId,senderId})
    return axios.post(`https://basic-banktsf.herokuapp.com/api/createTransaction`,{amount,reciverId,senderId})
      .then(function (response) {
        return response
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        return error
        console.log(error);
      })
      }
    

