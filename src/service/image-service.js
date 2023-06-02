const API_KEY = '563492ad6f91700001000001000a67ac4c3f4132b63f457794726003';
const BASE_URL = 'https://api.pexels.com/v1';

const searchParams = new URLSearchParams({
  orientation: 'landscape',
  per_page: 15,
});

export const getImages = async (query, page = 1) => {
  try {
    const data = await fetch(
      `${BASE_URL}/search?query=${query}&page=${page}&${searchParams}`,
      {
        headers: {
          Authorization: API_KEY,
        },
      }
    );

    const response = await data.json();
    return response;
  } catch (err) {
    console.log('Error', err);
  }
};

// export const getImages = (query, page = 1) => {
// return fetch(`${BASE_URL}?query=${query}&page=${page}&${params}`, {
//   headers: {
//     Authorization: API_KEY,
//   },
// }).then(response => {
//   if (!response.ok) {
//     throw new Error('Something went wrong');
//   }
//
//   return response.json();
// });
// };
