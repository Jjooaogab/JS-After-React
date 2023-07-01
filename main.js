// Object

const user = {
  name: 'Diego',
  age: 27,
  address: {
    street: 'Street Teste',
    number: 176,
  }
};

document.body.innerText = Object.keys(user) // Return all keys of object
document.body.innerText = JSON.stringify(Object.values(user)) // Return all values of object
document.body.innerText = JSON.stringify(Object.entries(user)) // Return vector include keys and values of object

// In ( Verifica se tem alguma coisa dentro do objeto )
//