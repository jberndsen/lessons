export class NotTodoService {
	notTodos:string[] = [];
	
	addNotTodo(value:string):void {
		this.notTodos.push(value);
	}
}