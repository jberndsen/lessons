export class NotTodoModel {
	status: string = "still ok";
	
	constructor(public title: string = "") { }
}

export class NotTodoService {
	notTodos: NotTodoModel[] = [];
	
	addNotTodo(value:NotTodoModel):void {
		this.notTodos.push(value);
	}
}