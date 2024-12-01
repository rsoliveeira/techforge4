abstract class TaskManager {
    protected tasks: { [key: string]: boolean } = {};

    abstract addTask(task: string): void;

    listTasks(): string[] {
        return Object.keys(this.tasks);
    }

    protected isDuplicate(task: string): boolean {
        return !!this.tasks[task];
    }
}


class Project extends TaskManager {
    addTask(task: string): void {
        if (this.isDuplicate(task)) {
            console.log(`A tarefa "${task}" já está adicionada ao projeto.`);
        } else {
            this.tasks[task] = true;
            console.log(`Tarefa "${task}" adicionada ao projeto.`);
        }
    }
}

class DailyTasks extends TaskManager {
    addTask(task: string): void {
        if (this.isDuplicate(task)) {
            console.log(`A tarefa diária "${task}" já foi adicionada.`);
        } else {
            this.tasks[task] = true;
            console.log(`Tarefa diária "${task}" adicionada.`);
        }
    }
}


const project = new Project();
project.addTask("Planejar o design do sistema");
project.addTask("Criar diagrama UML");
project.addTask("Planejar o design do sistema"); // Tarefa duplicada
console.log("Tarefas do projeto:", project.listTasks());

const dailyTasks = new DailyTasks();
dailyTasks.addTask("Responder e-mails");
dailyTasks.addTask("Preparar reunião");
dailyTasks.addTask("Responder e-mails"); // Tarefa duplicada
console.log("Tarefas diárias:", dailyTasks.listTasks());
