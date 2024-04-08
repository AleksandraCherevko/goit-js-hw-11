export function fetchRequest(name) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '43242855-c6b7005837cbd7f2bbf3eb2ae';

  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: name,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
