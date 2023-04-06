export const getUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users').then((res) => {
    return res.json();
  });
};

export const postUser = (userName: string) => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      userName,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};
