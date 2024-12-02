class Agenda {
    private compromissos: string[];

    constructor() {
        this.compromissos = [];
    }

    public adicionarCompromisso(compromisso: string) {
        this.compromissos.push(compromisso);
        console.log(`Compromisso "${compromisso}" adicionado com sucesso.`);
    }

    public listarCompromissos() {
        console.log("Lista de compromissos:");
        this.compromissos.forEach((compromisso, index) => {
            console.log(`${index + 1}. ${compromisso}`);
        });
    }
}

const minhaAgenda = new Agenda();
minhaAgenda.adicionarCompromisso("Reunião com a equipe às 14h");
minhaAgenda.adicionarCompromisso("Consulta médica às 16h");
minhaAgenda.listarCompromissos();
