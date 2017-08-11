import { TaskState } from "./TaskState";
export class Task{
    code: number;
    title: string;
    description?: string;
    state:TaskState;
}