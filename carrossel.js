const carrossel = ['>', '>', '<', '>', '>', '>', '>', '>']

let contador = 0
for (const local of carrossel) {
    local === '>' ? contador++ : contador--
    contador > 5 ? contador = 0 : contador < 0 ? contador = 5 : ''
}
console.log(contador);