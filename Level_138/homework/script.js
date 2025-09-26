
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
      console.log(`name: ${user.name}, email: ${user.email}`)
    })
  })
  .catch(error => {
    console.log(error)
  })
