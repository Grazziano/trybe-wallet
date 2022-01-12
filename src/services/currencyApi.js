const currencyApi = () => {
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data);
};

export default currencyApi;
