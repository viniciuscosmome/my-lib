const assert = require('node:assert');
const compara = require('../lib');

function test(describe, input, expected) {
  try {
    assert.strictEqual(input, expected);

    console.log(`✔ ${describe}`);
  } catch (error) {
    console.log(`\n❌ ${describe}`);
    console.log(`|--> [${error.code}] - ${error.operator}`);
    console.log(`|----> actual: ${error.actual}`);
    console.log(`|----> expected: ${error.expected}\n`);
  }
}

console.log('\n---Iniciando testes---\n')
test('Deve retornar true', compara('texto', 'o'), true);
test('Deve retornar false', compara('texto', 'a'), false);
test('Informa uma posição e deve retornar true', compara('texto', 'e', 2), true);
test('Informa uma posição e deve retornar false', compara('texto', 'e', 4), false);
console.log('\n---Finalizando testes---\n')
