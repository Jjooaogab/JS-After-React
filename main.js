// Optional Chaining

const user = {
  name: 'Diego',
  age:  27,
  address: {
    // street: 'St. Teste',
    number: 177,
    zip: {
      code: '49075470',
      city: 'Aracaju'
    },
    // showFullAddress() {
    //   return 'ok';
    // }
  }
}

const key = 'street';

document.body.innerText = user.address?.[key] ?? "A"
document.body.innerText = user.address?.showFullAddress?.() ?? "Não informado"