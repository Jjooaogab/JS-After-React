// Nullish Coalescing Operator ( ?? )

const age = null;

// 0, '', [], false, undefined, null => falsy

document.body.innerText = 'Sua idade é: ' + (age ?? 'Não informado')