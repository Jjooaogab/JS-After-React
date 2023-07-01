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

// Desestruturação

function showAge({ age: Idade }) {
  return Idade
}

const { address, age: Age, nickname = 'Defina seu nickname'  } = user
// document.body.innerText = JSON.stringify({address, Age, nickname}) 
document.body.innerText = showAge(user)

// Rest Operator
// const { name, ...rest } = user

const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]

const [first, , third,...rest] = array

document.body.innerText = JSON.stringify({ first, third, rest })