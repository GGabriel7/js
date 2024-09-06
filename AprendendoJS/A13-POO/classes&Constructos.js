const { linha } = require('../BibliotecaDeFuncoes/funcoes');

linha('Declarando uma class');

class Person {
    name; //pode ser removido mas fica mais facil de identificar as propriedades.

    constructor(name) {
        this.name = name;
    }

    introduceSelf() {
        console.log(`Hello! I'm ${this.name}.`);
    }
}

const adrielly = new Person("Adrielly");
const gabriel = new Person("Gabriel");

adrielly.introduceSelf();
gabriel.introduceSelf();
console.log(gabriel);
console.log(adrielly.name);

//Se não precisar fazer nenhuma inicialização especial, você pode omitir o construtor, e um construtor padrão será gerado para você:

class Animal {
    sleep() {
        console.log('zzzzzz');
    }
}
const dog = new Animal();
dog.sleep();

linha('Criando uma HERANÇA com base em Person');

class Professor extends Person {
    teaches;

    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    }

    introduceSelf() {
        console.log(`Hi! My name is ${this.name}, and I will be your ${this.teaches} professor.`);
    }

    grade(paper) {
        const grade = Math.floor(Math.random() * 10);//Gera uma nota aleatorio (prof burro)
        console.log(grade);
    }
}

const fabio = new Professor('Fabio', 'Redes de Computadores');
const fabiana = new Professor('Fabiana', 'Química');

fabio.introduceSelf();
fabiana.introduceSelf();
fabiana.grade('my paper');
console.log(fabio.name);
console.log(fabiana.teaches);
console.log(fabio);

linha('Agora para o aluno');

class Student extends Person {
    #year; //# deixa a propriedade privada, só pode acessar internamente e não externamente

    constructor (name, year) {
        super(name);
        this.#year = year;
    }

    introduceSelf() {
        console.log(`Hello! My name is ${this.name}, and I'm in year ${this.#year}.`)
    }

    canStudyArchery() {
        return this.#year > 1 //Irá retornar true, caso seja superior ao ano 1 e false caso esteja no ano 1
    }
}

const enderson = new Student('Enderson', 2);
const ryan = new Student('Ryan', 1);

enderson.introduceSelf();
ryan.introduceSelf();
console.log(enderson.name);
//console.log(ryan.#year) caso tentasse acessar daria erro de syntax
console.log(ryan.canStudyArchery());
console.log(enderson);

linha('Exemplo de privar um metodo');

class Example {
    metodoPublico() {
        this.#metodoPrivado();//consigo acessar internamente o #metodoPrivado
    }

    #metodoPrivado() {
        console.log('Hello!')
    }
}

const myExample = new Example()

myExample.metodoPublico()
//myExample.#metodoPrivado dará erro.