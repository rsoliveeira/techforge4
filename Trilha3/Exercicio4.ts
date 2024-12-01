class Animal {
    private energia: number;

    constructor() {
        this.energia = 50;
    }

    comer(): void {
        this.energia += 10;
        console.log(this.getNomeClasse() + " está se alimentando. Energia aumentada.");
    }

    statusEnergia(): void {
        console.log(this.getNomeClasse() + " tem " + this.getEnergia() + " de energia.");
    }

    
    private getNomeClasse(): string {
        if (this instanceof Leao) {
            return "Leão";
        } else if (this instanceof Passaro) {
            return "Pássaro";
        }
        return "Animal";
    }

    protected getEnergia(): number {
        return this.energia;
    }
}

class Leao extends Animal {

    comer(): void {
        console.log("Leão está caçando... Gastando energia.");
        this['energia'] -= 20;
        super.comer();
    }
}


class Passaro extends Animal {

    comer(): void {
        super.comer(); 
    }
}


function mostrarStatusAnimal(animal: Animal): void {
    animal.statusEnergia(); 
}


const leao = new Leao();
const passaro = new Passaro();


leao.comer(); 
mostrarStatusAnimal(leao); 

passaro.comer(); 
mostrarStatusAnimal(passaro);
