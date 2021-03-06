// iterators and iterable são protocolos novos que permitem iterar sobre uma informação

[1,2,3,4,5,6] // iterables são elementos que eu possa iterar. iterator é um elemnetoq em que eu possa iterar.

var txt = 'Brasil'; //iterable
var it = txt[Symbol.iterator](); //iterator

console.log( it.next() ); //Object {value: "B", done: false} done: false quer dizer que ainda não acabou
console.log( it.next() );
console.log( it.next() );
console.log( it.next() );
console.log( it.next() );
console.log( it.next() ); //Aqui ainda ele vem done: false porque ele precisa iterar mais uma vez e receber undefined

// Com esse for eu consigo parar a iteração
for( letter of txt) {
  console.log(letter);
  if(letter === 'a') break;
}
