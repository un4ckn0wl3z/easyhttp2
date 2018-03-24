const http = new EasyHTTP;

// Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => data => console.log(data));

// User Data
// const data = {
//   name: 'Anuwat',
//   username: 'un4',
//   email: 'un4@git.private'
// }

// Post
// http.post('https://jsonplaceholder.typicode.com/users',data)
// .then(data => console.log(data))
// .catch(err => data => console.log(data));

// Update
// http.put('https://jsonplaceholder.typicode.com/users/2',data)
// .then(data => console.log(data))
// .catch(err => data => console.log(data));

// DELETE

http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => data => console.log(data));


