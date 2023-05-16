const URL = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=27f7ed587efeca878990fec4b1a20915`;

// const respoase = await fetch(URL, {
//   method: "GET",
// });

// const result = await respoase.json();

// console.log(result);

const axios = require("axios");

axios
  .get(URL)
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
