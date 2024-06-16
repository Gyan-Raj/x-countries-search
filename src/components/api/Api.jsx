import axios from "axios";
export const fetchData = async () => {
  try {
    let response = await axios.get("https://restcountries.com/v3.1/all");
    // console.log(response);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
