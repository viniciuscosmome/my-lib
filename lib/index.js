const lodash = require('lodash');

/**
 * 
 * @param {String} entrada 
 * @param {String} teste 
 * @param {String} posicaoParaTeste 
 * @returns true | false
 * @description
 *  * _**True**_, se o valor de _letra_ for o último caractere, ou esteja na _posicaoParaTeste_ informada
 *  * _**False**_, se o valor de _letra_ não for o último caractere, ou não esteja na _posicaoParaTeste_ informada
 */
function comparaUltimaLetra(entrada, letra, posicaoParaTeste) {
  return lodash.endsWith(entrada, letra, posicaoParaTeste);
}

module.exports = comparaUltimaLetra;
