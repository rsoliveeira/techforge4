var Agenda = /** @class */ (function () {
    function Agenda() {
        this.compromissos = [];
    }
    Agenda.prototype.adicionarCompromisso = function (compromisso) {
        this.compromissos.push(compromisso);
        console.log("Compromisso \"".concat(compromisso, "\" adicionado com sucesso."));
    };
    Agenda.prototype.listarCompromissos = function () {
        console.log("Lista de compromissos:");
        this.compromissos.forEach(function (compromisso, index) {
            console.log("".concat(index + 1, ". ").concat(compromisso));
        });
    };
    return Agenda;
}());
var minhaAgenda = new Agenda();
minhaAgenda.adicionarCompromisso("Reunião com a equipe às 14h");
minhaAgenda.adicionarCompromisso("Consulta médica às 16h");
minhaAgenda.listarCompromissos();
