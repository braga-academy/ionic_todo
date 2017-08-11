import { TarefaState } from "./TarefaState";
export class Tarefa{
    code: number;
    title: string;
    description?: string;
    state:TarefaState;
}