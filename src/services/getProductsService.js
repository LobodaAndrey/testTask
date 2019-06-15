import axios from 'axios'

export const getProductsService = async (token) => {
  await axios.get(' https://gentle-escarpment-19443.herokuapp.com/v1/articles?page=1&updated_after=1410403761', {
    mode: 'no-cors',
    method: "GET",
    credentials: "include",
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
    .then((res) => {
      console.log(res)
      let myRes = res
    });
}