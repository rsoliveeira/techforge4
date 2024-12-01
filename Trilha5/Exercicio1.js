var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = {};
    }
    TaskManager.prototype.listTasks = function () {
        return Object.keys(this.tasks);
    };
    TaskManager.prototype.isDuplicate = function (task) {
        return !!this.tasks[task];
    };
    return TaskManager;
}());
var Project = /** @class */ (function (_super) {
    __extends(Project, _super);
    function Project() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Project.prototype.addTask = function (task) {
        if (this.isDuplicate(task)) {
            console.log("A tarefa \"".concat(task, "\" j\u00E1 est\u00E1 adicionada ao projeto."));
        }
        else {
            this.tasks[task] = true;
            console.log("Tarefa \"".concat(task, "\" adicionada ao projeto."));
        }
    };
    return Project;
}(TaskManager));
var DailyTasks = /** @class */ (function (_super) {
    __extends(DailyTasks, _super);
    function DailyTasks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DailyTasks.prototype.addTask = function (task) {
        if (this.isDuplicate(task)) {
            console.log("A tarefa di\u00E1ria \"".concat(task, "\" j\u00E1 foi adicionada."));
        }
        else {
            this.tasks[task] = true;
            console.log("Tarefa di\u00E1ria \"".concat(task, "\" adicionada."));
        }
    };
    return DailyTasks;
}(TaskManager));
var project = new Project();
project.addTask("Planejar o design do sistema");
project.addTask("Criar diagrama UML");
project.addTask("Planejar o design do sistema"); // Tarefa duplicada
console.log("Tarefas do projeto:", project.listTasks());
var dailyTasks = new DailyTasks();
dailyTasks.addTask("Responder e-mails");
dailyTasks.addTask("Preparar reunião");
dailyTasks.addTask("Responder e-mails"); // Tarefa duplicada
console.log("Tarefas diárias:", dailyTasks.listTasks());
