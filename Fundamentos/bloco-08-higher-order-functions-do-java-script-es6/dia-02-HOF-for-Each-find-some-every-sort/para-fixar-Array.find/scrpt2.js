//2 - Utilize o find para encontrar o primeiro nome com cinco letras, 
//caso ele exista:
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = names.find(argumento => argumento.length === 5);

console.log(findNameWithFiveLetters);
