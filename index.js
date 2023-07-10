function Funcionario(nome, idade) {
    this.nome = `Nome: ${nome}`
    this.idade = `Idade: ${idade} anos`
}


function FrontEnd(nome, idade, salario, localDeTrabalho) {
    Funcionario.call(this, nome, idade)

    this.salario = `O salário do funcionário é de: R$ ${salario}`
    this.localDeTrabalho = `Este funcionário trabalha em ${localDeTrabalho}`
    this.cargo = "O cargo da pessoa é: Front-End"
}

function BackEnd(nome, idade, salario, localDeTrabalho) {
    Funcionario.call(this, nome, idade)

    this.salario = `O salário do funcionário é de: R$ ${salario}`
    this.localDeTrabalho = `Este funcionário trabalha em ${localDeTrabalho}`
    this.cargo = "O cargo da pessoa é: Back-end"
}

const Maria = new Funcionario("Maria", 43)
const Joana = new FrontEnd("Joana", 27, "5.000", "Regime de home-office")
const Lucas = new BackEnd("Lucas", 33, "4.000", "Regime presencial")

console.log(Lucas)