abstract class Funcionario {
    private nome: string;
    private salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    
    abstract calcularBonus(): number;

    
    calcularSalarioComBonus(): number {
        return this.salario + this.calcularBonus(); // Salário + bônus
    }

   
    getNome(): string {
        return this.nome;
    }

    
    getSalario(): number {
        return this.salario;
    }
}


class Gerente extends Funcionario {

    
    calcularBonus(): number {
        return this.getSalario() * 0.10;
    }
}


class Operario extends Funcionario {

    
    calcularBonus(): number {
        return this.getSalario() * 0.05;
    }
}


function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach(funcionario => {
        console.log(`${funcionario.getNome()} - Salário com bônus: R$${funcionario.calcularSalarioComBonus().toFixed(2)}`);
    });
}


const gerente = new Gerente("Carlos", 5000);
const operario = new Operario("João", 3000);

const funcionarios: Funcionario[] = [gerente, operario];

calcularSalarioComBonus(funcionarios);
