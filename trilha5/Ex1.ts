abstract class TaskManager {
    protected tasks: { name: string }[] = [];

    abstract addTask(task: string): void;
    abstract listTasks(): string[];
}

class Project extends TaskManager {
    addTask(task: string): void {
        const exists = this.tasks.some(t => t.name === task);
        if (!exists) {
            this.tasks.push({ name: task });
        }
    }

    listTasks(): string[] {
        return this.tasks.map(t => `Projeto: ${t.name}`);
    }
}

class DailyTasks extends TaskManager {
    addTask(task: string): void {
        const exists = this.tasks.some(t => t.name === task);
        if (!exists) {
            this.tasks.push({ name: task });
        }
    }

    listTasks(): string[] {
        return this.tasks.map(t => `Diária: ${t.name}`);
    }
}
