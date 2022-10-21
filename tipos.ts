// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 20;
const avaliacao: number = 9.5;

// String
const nome: string = 'Eduardo Muniz';

// Array
const idades: number[] = [20, 25, 38, 41];
const idades2: Array<number> = [10, 20, 30, 40];

// Tuple
let jogadores: [string, number, boolean];
jogadores = ['Eduardo', 7, false];

// Enum
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any
const retornoDaAPI: any[] = [12345, 'Fulano', true]
const retornoDaAPI2: any = {
    // ......
};

// Void
function printarNaTela(msg: string) {
    console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(objeto: object) {
    //....
}
criar({
    propriedade: 1,
})


// Never
function loopInfinito(): never {
    while (true) { }
}

function erro(mensagem: string): never {
    throw new Error(mensagem);
}

function falha() {
    return erro('Algo deu errado');
}

// Union Types
const nota: string | number = 5;
function exibirNota(nota: number | string) {
    console.log(`A nota é ${nota}`);
}
exibirNota('10');
exibirNota(10);

// Alias
type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}

type Funcionarios = Funcionario[]
const funcionarios: Funcionarios = [{
    nome: 'Eduardo',
    sobrenome: 'Muniz',
    dataNascimento: new Date()
}];

function tratarFuncionarios(funcionarios: Funcionario[]) {
    for(let funcionario of funcionarios) {
        console.log('Nome do funcionário: ', funcionario.nome)
    }
}