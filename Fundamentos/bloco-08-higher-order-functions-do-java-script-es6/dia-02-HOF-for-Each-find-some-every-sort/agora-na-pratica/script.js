const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
//Dica: use a função find.

const authorBornIn1947 = books.find(argumento1 => argumento1.author.birthYear === 1947);

console.log(authorBornIn1947.author.name);

//2 - Retorne o nome do livro de menor nome.
//Dica: use a função forEach.
function smallerName() {
  let nameBook;
  // escreva aqui o seu código

  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

//3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
const getNamedBook = books.find(argumento1 => argumento1.name.length === 26);

console.log(getNamedBook.name);

//4 - Ordene os livros por data de lançamento em ordem decrescente.
books.sort((argumento1, argumento2) => argumento2.releaseYear - argumento1.releaseYear);

console.log(books);

//5 - Faça uma função que retorne true, 
//se todas as pessoas autoras nasceram no século XX, 
//ou false, caso contrário.
const everyoneWasBornOnSecXX = books.every(argumento1 => 
  argumento1.author.birthYear >= 1900 && 
  argumento1.author.birthYear <= 2000);

console.log(everyoneWasBornOnSecXX);

//6 - Faça uma função que retorne true, 
//se algum livro foi lançado na década de 80, 
//e false, caso contrário.
const someBookWasReleaseOnThe80s = books.some(argumento1 =>
argumento1.releaseYear >= 1980 && 
argumento1.releaseYear <= 1989);

console.log(someBookWasReleaseOnThe80s);

//7 - Faça uma função que retorne true, 
//caso nenhum author tenha nascido no mesmo ano, 
// e false, caso contrário.
function authorUnique() {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}
