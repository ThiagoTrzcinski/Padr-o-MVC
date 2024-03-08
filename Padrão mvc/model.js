class Task {
    constructor(id, description, status) {
        this.id = id;
        this.description = description;
        this.status = status;
    }
}

const tasks = [
    new Task(1, "Entrevista com o professor", "Concluído"),
    new Task(2, "Estudar JavaScript", "Em andamento"),
    new Task(3, "Trabalhar no projeto", "pendente")
];
